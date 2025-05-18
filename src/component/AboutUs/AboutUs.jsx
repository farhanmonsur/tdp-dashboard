import React from "react";
import "./AboutUs.css";
import nafiz from "../../assets/nafiz.png"
import himeshi from "../../assets/Himeshi.jpg"
import junjie from "../../assets/junjie.jpeg"
import indradi from "../../assets/indradi.png"
import tan from "../../assets/tan.jpeg"
import farhan from "../../assets/farhan.jpeg"

const teamMembers = [
  {
    name: "Himeshi",
    role: "Project Manager (NLP Analyst)",
    portfolio: "https://www.linkedin.com/in/himeshi-abeysekara-a9bb6623a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "himeshi.hka@gmail.com",
    image: himeshi,
  },
  {
    name: "Nafiz Imtiaz",
    role: "Project Member (Dashboard Designer/Developer)",
    portfolio: "https://www.linkedin.com/in/nafizimtiaz29/",
    email: "nafizimtiaz13@gmail.com",
    image: nafiz
  },
  {
    name: "Junjie Wu",
    role: "Project Member (Research Lead)",
    portfolio: "https://github.com/ZaozaoHuahua",
    email: "wjj960419@gmail.com",
    image: junjie,
  },
  {
    name: "Farhan Monsur",
    role: "Project Member (EDA Analyst)",
    portfolio: "https://github.com/farhanmonsur",
    email: "farhan.i.monsur@gmail.com",
    image: farhan,
  },
  {
    name: "Indradi Lukman",
    role: "Project Member (Research Analyst)",
    portfolio: "https://www.linkedin.com/in/indradi-lukman-511177248/",
    email: "indradi99@gmail.com",
    image: indradi,
  },
  {
    name: "Tan Ngoc Dinh",
    role: "Project Supervisor",
    portfolio: "",
    email: "ndinh@swin.edu.au",
    image: tan,
  }
];

const AboutUs = () => {
  return (
    <>
    <h2 className="contributors-heading">Contributors</h2>
    <div className="about-grid">
      {teamMembers.map((member, index) => (
        <div className="profile-card" key={index}>
          <img src={member.image} alt={member.name} className="profile-img" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          {member.portfolio && (
  <p><a href={member.portfolio} target="_blank" rel="noreferrer">Portfolio</a></p>
)}

          <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
        </div>
      ))}
    </div>
    </>
  );
};

export default AboutUs;
