import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <div className="resources-container">
      <h2 className="resources-heading">Resources</h2>
      <ul className="resources-list">
        <li>
          <strong>Original Dataset:</strong>{" "}
          <a href="https://drive.google.com/file/d/1N8R5qc2gSEw2bk51rQwk3RJ6iuHHrVPe/view?usp=sharing" target="_blank" rel="noreferrer">
            Google Drive Link
          </a>
        </li>
        <li>
          <strong>Cleaned Dataset:</strong>{" "}
          <a href="https://github.com/ZaozaoHuahua/data_cleaning_project_v1.2_05-04-2025" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </li>
        <li>
          <strong>Special Thanks:</strong>{" "}
          <a href="https://data.snf.ch/" target="_blank" rel="noreferrer">
            SNF Open Data Portal
          </a>
        </li>
         <li>
          <strong>NLP Analysis Codebase: </strong>{" "}
          <a href="https://colab.research.google.com/drive/1-DVn8bAImzJgPIFa-LB0umyE6LPwA-jR?usp=sharing" target="_blank" rel="noreferrer">
            Google Colab
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
