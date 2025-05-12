import React from "react";
import "./AboutUs.css";
import nafiz from "../../assets/nafiz.png"

const teamMembers = [
  {
    name: "Himeshi",
    role: "Dashboard Developer",
    portfolio: "https://portfolio.alice.dev",
    email: "alice@example.com",
    image: nafiz,
  },
  {
    name: "Nafiz Imtiaz",
    role: "UX/UI Designer",
    portfolio: "https://dribbble.com/brianlee",
    email: "brian@example.com",
    image: nafiz
  },
  {
    name: "Farhan Monsur",
    role: "Data Analyst",
    portfolio: "https://github.com/cynthiawang",
    email: "cynthia@example.com",
    image: nafiz,
  },
  {
    name: "Junjie",
    role: "Research Lead",
    portfolio: "https://davidresearch.net",
    email: "david@example.com",
    image: nafiz,
  },
  {
    name: "Indradi",
    role: "Front-end Developer",
    portfolio: "https://ellacodes.dev",
    email: "ella@example.com",
    image: nafiz,
  }
];

const AboutUs = () => {
  return (
    <div className="about-grid">
      {teamMembers.map((member, index) => (
        <div className="profile-card" key={index}>
          <img src={member.image} alt={member.name} className="profile-img" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <p><a href={member.portfolio} target="_blank" rel="noreferrer">Portfolio</a></p>
          <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
