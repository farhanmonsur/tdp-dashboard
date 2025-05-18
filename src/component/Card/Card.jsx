import React, { useState } from "react";
import "./Card.css";


import q1i1 from "../../assets/q1i1.png"
import q1i2 from "../../assets/q1i2.png"
import q2i1 from "../../assets/q2i1.png"
import q2i2 from "../../assets/q2i2.png"
import q2i3 from "../../assets/q2i3.png"
import q2i4 from "../../assets/q2i4.png"
import q2i5 from "../../assets/q2i5.png"
import q3i1 from "../../assets/q3i1.png"
import q3i2 from "../../assets/q3i2.png"
import q3i3 from "../../assets/q3i3.png"
import q3i4 from "../../assets/q3i4.png"
import q3i5 from "../../assets/q3i5.png"
import q3i6 from "../../assets/q3i6.png"
import q3i7 from "../../assets/q3i7.png"
import q3i8 from "../../assets/q3i8.png"
import q3i9 from "../../assets/q3i9.png"
import q3i10 from "../../assets/q3i10.png"
import q4i1 from "../../assets/q4i1.png"
import q4i2 from "../../assets/q4i2.png"
import q4i3 from "../../assets/q4i3.png"
import q5i1 from "../../assets/q5i1.png"

const dataStories = [
  {
    question: "How has international collaboration affected research trends?",
    images: [
      { src: q1i1, caption: "With Switzerland" },
      { src: q1i2, caption: "Without Switzerland" }
    ],
    explanation: "There are various roles that the people involved in a research grant play. Some individuals are the main applicant that were responsible in applying and obtaining the research grant, some others could be the project partners involved with the grant. Since the Swiss National Science Foundation (SNSF) are based in Switzerland, it is logical that most of the grants were given to Swiss-based organizations and institutions. The network visualization proves this. Each node in the visualization is either an individual person or an individual grant. There are two visualizations made using VPNet: one with Swiss-based organization and another with the organization filtered out. The visualization that had Swiss-based organization are more densely clustered which indicate that most of the grants in a given year were given to Swiss-based organizations and research. This trend continues with subsequent years."
  },
  {
    question: "Do grants with a larger number of investigators receive higher funding?",
    images: [
      { src: q2i1, caption: "Seed 1" },
      { src: q2i2, caption: "Seed 2" },
      { src: q2i3, caption: "Seed 3" },
      { src: q2i4, caption: "Seed 4" },
      { src: q2i5, caption: "Seed 5" }
    ],
    explanation: "While it would be simple to assume that greater funding equates to greater number of investigators, the truth from the visualization might not support this idea. The network visualization used random sample of 1000 grant records to investigate this research question. Each Grant node (the node that sits in the middle of each cluster) has varying sizes dependent on the value of funding that were given in those grants. If there is indeed a positive connection between the number of investigators and funding amount, then each cluster of nodes would have higher number of edges depending on the size of the node they are connected to. However, the visualization does not support this scenario as the number of edges remains fluctuating regardless of the size of the Grant nodes.	 The visualization were repeated 5 times with different random samples to ensure that the insight collected is accurate. Therefore, one can conclude that funding amount does not affect the number of investigators nor vice versa."
  },
  {
    question: "Is there a rise in women’s involvement over the years across different research topics?",
    images: [
      { src: q3i1, caption: "General History" },
      { src: q3i2, caption: "Information Technology" },
      { src: q3i3, caption: "Legal Sciences" },
      { src: q3i4, caption: "Mathematics" },
      { src: q3i5, caption: "Molecular Biology" },
      { src: q3i6, caption: "Neurophysiology & Brain Research" },
      { src: q3i7, caption: "Organic Chemistry" },
      { src: q3i8, caption: "Psychology" },
      { src: q3i9, caption: "Condensed Matter Physics" },
      { src: q3i10, caption: "Economics" },
    ],
    explanation: "The dataset for this research question were grouped by year, with each set containing data from the top 10 research topics based on the number of grants awarded to it. The central nodes in each visualization are the year in which the research topics had been given grants, with the smaller nodes indicating each female individuals that was involved in research towards that particular topic. Comparing every visualization with each other, there were consistency in the amount of female individuals conducting research towards the research topic. The overall amount of female individuals involved within a particular year increases the closer the year gets to today."
  },
    {
    question: "Are certain research topics underrepresented in receiving research funding?",
    images: [
      { src: q4i1, caption: "2014" },
      { src: q4i2, caption: "2019" },
      { src: q4i3, caption: "2020" }
    ],
    explanation: "The dataset used grants that were issued in 2019, 2020, and 2014; these are the years with the highest number of grants being issued throughout the entire database. The central nodes in this visualization are every research topics that were given funding throughout the entire dataset. The size of these central nodes is dependent on the amount of edges that are connected to it. There are clearly several research topics in the center of the visualization that were given a large number of funding than the rest of the researches in the perimeter of the network. Therefore, there are numerous research topics being underrepresented by receiving less grants than other topics."
  },
  {
    question: "Is there a correlation between the funding amount and the research output?",
    images: [
      { src: q5i1, caption: "2020" }
    ],
    explanation: "Using network visualization, one can deduce whether there is a connection between the funding amount, and the number of publication and awards being given as a result of the funding. To do this, the total funding amount for the years in question (2019 and 2020) were split in two halves. Hypothetically, if there is no connection between the number of output publications and awards being given with the amount of funding invested, then the network visualization between these two halves of the total funding should look similar. However, in reality, the two networks were drastically different in sizes, highly indicative of a connection between output and funding invested."
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
          <img src={story.images[0].src} alt="Preview" />
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
                {selectedStory.images.slice(currentIndex, currentIndex + 2).map((imgObj, i) => (
                  <div key={i} className="figure-container">
                    <img src={imgObj.src} alt={`Story ${i}`} />
                    <p className="figure-caption">{imgObj.caption}</p>
                  </div>
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
