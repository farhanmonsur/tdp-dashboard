import React, { useState } from "react";
import "./Card.css";

import img1 from "../../assets/2021 without Switzerland.png";
import img2 from "../../assets/With Switzerland.png";
import img3 from "../../assets/ques2image1.png";
import img4 from "../../assets/ques2image2.png";
import img5 from "../../assets/ques2image3.png";
import img6 from "../../assets/ques2image4.png";
import img7 from "../../assets/ques2image5.png";
import img8 from "../../assets/ques2image6.png";

const dataStories = [
  {
    question: "How has international collaboration affected research trends?",
    images: [img1, img2],
    explanation: "This story explores how the inclusion or exclusion of certain countries impacts global research dynamics."
  },
  {
    question: "How has international collaboration affected research trends?",
    images: [img1, img2],
    explanation: "This story explores how the inclusion or exclusion of certain countries impacts global research dynamics."
  },
  {
    question: "How has international collaboration affected research trends?",
    images: [img1, img2],
    explanation: "This story explores how the inclusion or exclusion of certain countries impacts global research dynamics."
  },
  {
    question: "What fields dominate gender-focused grants?",
    images: [img3, img4, img5, img6, img7, img8],
    explanation: "A breakdown of disciplines with the highest concentration of gender diversity efforts in funded research."
  }
];

const Card = () => {
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
      {dataStories.map((story, index) => (
        <div key={index} className="card-item" onClick={() => setSelectedStory(story)}>
          <img src={story.images[0]} alt="Preview" />
          <h3>{story.question}</h3>
        </div>
      ))}

      {selectedStory && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>×</button>
            <h2>{selectedStory.question}</h2>

            <div>
              <div className="modal-images">
                {selectedStory.images.slice(currentIndex, currentIndex + 2).map((img, i) => (
                  <img key={i} src={img} alt={`Story ${i}`} />
                ))}
              </div>

              {selectedStory.images.length > 2 && (
                <div className="carousel-controls">
                  <button onClick={handlePrev} disabled={currentIndex === 0}>←</button>
                  <button onClick={handleNext} disabled={currentIndex + 2 >= selectedStory.images.length}>→</button>
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

export default Card;
