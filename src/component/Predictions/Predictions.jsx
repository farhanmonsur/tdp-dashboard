import React, { useState } from "react";
import "./Predictions.css";

// Import prediction images
import p1 from "../../assets/pred1.png";
import p2 from "../../assets/pred2.png";
import p3 from "../../assets/pred3.png";

const predictionStories = [
  {
    question: "Annual Grant Funding Trend",
    images: [
      { src: p1, caption: "Annual Grant Funding Scatter Plot" }
    ],
    explanation:
      "Fluctuation of grant funds over the years. There is a clear upward trend, with notable increases in recent years."
  },
{
    question: "Annual Grant Funding Trend (Cleaned)",
    images: [
      { src: p2, caption: "Annual Grant Funding Scatter Plot (Cleaned)" }
    ],
    explanation:
      "Annual Grant Funding data points further cleaned to prepare for the predictive model. Extreme outliers removed and data is normalised to show percentage change in amount granted. "
  },
   {
    question: "LSTM predicting grant amounts based on past trends.",
    images: [
      { src: p3, caption: "Annual Grant Funding Scatter Plot" }
    ],
    explanation:
      "Features were scaled using a MinMax scaler (0-1). Based on 2-year group sequences next year grant is predicted using a 90/10 train/test split. A reverse scale is done before plotting the predicted amounts.\n LSTM model metrics: \nMAE: 30529947.96428572 \nRMSE: 41504336.61252074 \nR2: 0.9805999207639016"
  },
];

const Predictions = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => {
    setSelectedStory(null);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (selectedStory && currentIndex + 2 < selectedStory.images.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const handlePrev = () => {
    if (selectedStory && currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  return (
    <div className="card-grid">
      {predictionStories.map((story, index) => (
        <div key={index} className="card-item" onClick={() => setSelectedStory(story)}>
          <img src={story.images[0].src} alt="Preview" />
          <h3>{story.question}</h3>
        </div>
      ))}

      {selectedStory && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
            <h2>{selectedStory.question}</h2>

            <div>
              <div className="modal-images">
                {selectedStory.images.slice(currentIndex, currentIndex + 2).map((imgObj, i) => (
                  <div key={i} className="figure-container">
                    <img src={imgObj.src} alt={`Prediction ${i}`} />
                    <p className="figure-caption">{imgObj.caption}</p>
                  </div>
                ))}
              </div>

              {selectedStory.images.length > 2 && (
                <div className="carousel-controls">
                  <button onClick={handlePrev} disabled={currentIndex === 0}>
                    ←
                  </button>
                  <button onClick={handleNext} disabled={currentIndex + 2 >= selectedStory.images.length}>
                    →
                  </button>
                </div>
              )}
            </div>

            <p>{selectedStory.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predictions;
