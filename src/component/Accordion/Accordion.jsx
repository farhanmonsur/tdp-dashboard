import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import "./Accordion.css";
import image1 from "../../assets/2021 without Switzerland.png";
import image2 from "../../assets/With Switzerland.png";

import image3 from "../../assets/ques2image1.png";
import image4 from "../../assets/ques2image2.png";
import image5 from "../../assets/ques2image3.png";
import image6 from "../../assets/ques2image4.png";
import image7 from "../../assets/ques2image5.png";
import image8 from "../../assets/ques2image6.png";


import image9 from "../../assets/general history.png";
import image10 from "../../assets/information technology.png";
import image11 from "../../assets/legal sciences.png";
import image12 from "../../assets/mathematics.png";
import image13 from "../../assets/molecular biology.png";
import image14 from "../../assets/neurophysiology and brain research.png";
import image15 from "../../assets/psychology.png";

import image16 from "../../assets/2014.png";
import image17 from "../../assets/2019.png";
import image18 from "../../assets/2020.png";

import image19 from "../../assets/secondlast.png";
import image20 from "../../assets/last.png";


const snaQuestions = [
  {
    question: "Who is involved?",
    images: [
      {
        image: image1,
        caption: "2021 without Switzerland",
      },
      {
        image: image2,
        caption: "Without Switzerland",
      },
    ],
    answer: `There are various roles that the people involved in a research grant play. Some individuals are the main applicant that were responsible in applying and obtaining the research grant, some others could be the project partners involved with the grant. Since the Swiss National Science Foundation (SNSF) are based in Switzerland, it is logical that most of the grants were given to Swiss-based organizations and institutions. The network visualization proves this. Each node in the visualization is either an individual person or an individual grant. There are two visualizations made using VPNet: one with Swiss-based organization and another with the organization filtered out. The visualization that had Swiss-based organization are more densely clustered which indicate that most of the grants in a given year were given to Swiss-based organizations and research. This trend continues with subsequent years.`,
  },
  {
    question:
      "Do grants with a larger number of investigators receive higher funding?",
    images: [
      {
        image: image3,
        caption: "",
      },
      {
        image: image4,
        caption: "",
      },
      {
        image: image5,
        caption: "",
      },
      {
        image: image6,
        caption: "",
      },
      {
        image: image7,
        caption: "",
      },
      {
        image: image8,
        caption: "",
      },
    ],
    answer: `While it would be simple to assume that greater funding equates to greater number of investigators, the truth from the visualization might not support this idea. The network visualization used random sample of 1000 grant records to investigate this research question. Each Grant node (the node that sits in the middle of each cluster) has varying sizes dependent on the value of funding that were given in those grants. If there is indeed a positive connection between the number of investigators and funding amount, then each cluster of nodes would have higher number of edges depending on the size of the node they are connected to. However, the visualization does not support this scenario as the number of edges remains fluctuating regardless of the size of the Grant nodes. The visualization were repeated 5 times with different random samples to ensure that the insight collected is accurate. Therefore, one can conclude that funding amount does not affect the number of investigators nor vice versa.`,
  },
  {
    question:
      "Is there a rise in women’s involvement over the years across different research topics?",
    images: [
      {
        image: image9,
        caption: "General History",
      },
      {
        image: image10,
        caption: "Information Technology",
      },
      {
        image: image11,
        caption: "Legal Sciences",
      },
      {
        image: image12,
        caption: "Mathematics",
      },
      {
        image: image14,
        caption: "Neurophysiology & Brain Research",
      },
      {
        image: image15,
        caption: "Psychology",
      },
      {
        image: image13,
        caption: "Molecular Biology",
      },
    ],
    answer: `The dataset for this research question were grouped by year, with each set containing data from the top 10 research topics based on the number of grants awarded to it. The central nodes in each visualization are the year in which the research topics had been given grants, with the smaller nodes indicating each female individuals that was involved in research towards that particular topic. Comparing every visualization with each other, there were consistency in the amount of female individuals conducting research towards the research topic. The overall amount of female individuals involved within a particular year increases the closer the year gets to today.`,
  },
  {
    question:
      "Are certain research topics underrepresented in receiving research funding?",
    images: [
      {
        image: image16,
        caption: "2014",
      },
      {
        image: image17,
        caption: "2019",
      },
      {
        image: image18,
        caption: "2020",
      }
    ],
    answer: `The dataset used grants that were issued in 2019, 2020, and 2014; these are the years with the highest number of grants being issued throughout the entire database. The central nodes in this visualization are every research topics that were given funding throughout the entire dataset. The size of these central nodes is dependent on the amount of edges that are connected to it. There are clearly several research topics in the center of the visualization that were given a large number of funding than the rest of the researches in the perimeter of the network. Therefore, there are numerous research topics being underrepresented by receiving less grants than other topics.`,
  },
  {
    question:
      "Is there a correlation between the funding amount and the research output?",
    images: [
      {
        image: image19,
        caption: "",
      },
      {
        image: image20,
        caption: "",
      },
    ],
    answer: `Using network visualization, one can deduce whether there is a connection between the funding amount, and the number of publication and awards being given as a result of the funding. To do this, the total funding amount for the years in question (2019 and 2020) were split in two halves. Hypothetically, if there is no connection between the number of output publications and awards being given with the amount of funding invested, then the network visualization between these two halves of the total funding should look similar. However, in reality, the two networks were drastically different in sizes, highly indicative of a connection between output and funding invested.`,
  },
];

export default function AccordionTransition() {
  const [expandedIndex, setExpandedIndex] = React.useState(false);

  const darkBackground = "#1c1c1c";
  const bodyTextColor = "#eeeeee";

  return (
    <div className="accordion_container">
      {snaQuestions.map((item, index) => (
        <Accordion
          key={index}
          expanded={expandedIndex === index}
          onChange={() =>
            setExpandedIndex(expandedIndex === index ? false : index)
          }
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 300 } }}
          sx={{
            width: "100%", // fixed width
            backgroundColor: darkBackground,
            color: "white",
            mt: index == 0 ? 0 : 2,
            borderRadius: 2,
            overflow: "hidden",
            [`& .${accordionClasses.region}`]: {
              height: expandedIndex === index ? "auto" : 0,
            },
            [`& .${accordionDetailsClasses.root}`]: {
              display: expandedIndex === index ? "block" : "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls={`panel-${index}-content`}
            id={`panel-${index}-header`}
            sx={{ color: "white" }}
          >
            <Typography component="span">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: darkBackground,
              color: bodyTextColor,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
                marginBottom: "1rem",
              }}
            >
              {item.images.map((imgObj, imgIndex) => (
                <figure
                  key={imgIndex}
                  style={{ margin: 0, textAlign: "center" }}
                >
                  <img
                    src={imgObj.image}
                    alt={imgObj.caption}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  {imgObj.caption != "" && (
                    <figcaption
                      style={{
                        marginTop: "8px",
                        fontSize: "0.9rem",
                        color: "#ccc",
                      }}
                    >
                      Fig: {imgObj.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
