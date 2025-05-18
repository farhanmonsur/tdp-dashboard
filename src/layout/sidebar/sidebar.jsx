import React, { useState } from "react";

import Swimburne from "../../assets/swimburne.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DataExplorationIcon from '@mui/icons-material/DataExploration';
import InsightsIcon from "@mui/icons-material/Insights";

import "./sidebar.css";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);

  const isDiscoveryActive = () =>
    ["Discovery", "Grants", "Contributors", "Diversity", "Impacts"].includes(activeItem);

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar_logo-container">
        <img
          className="sidebar_logo"
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Logo_of_Swinburne_University_of_Technology.svg/1920px-Logo_of_Swinburne_University_of_Technology.svg.png"}
          alt="Swinburne University"
        />
        <img
          className="sidebar_logo"
          src={"https://pps-lab.com/images/funding/snsf.svg"}
          alt="SNSF"
        />
      </div>

      {/* Menu */}
      <div className="sidebar_menu">
        {/* Overview */}
        <div
          className={`sidebar_menu-item ${activeItem === "Overview" ? "active" : ""}`}
          onClick={() => setActiveItem("Overview")}
        >
          <div className="sidebar_menu-item-first-section">
            <DashboardIcon />
            <span>Overview</span>
          </div>
        </div>

        {/* Discovery */}
        <div
          className={`sidebar_menu-item ${isDiscoveryActive() ? "active" : ""}`}
          onClick={() => {
            setIsDiscoveryOpen(!isDiscoveryOpen);
            setActiveItem("Grants");
          }}
        >
          <div className="sidebar_menu-item-first-section">
            <ContentPasteSearchIcon />
            <span>Discovery</span>
          </div>
          {isDiscoveryOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>

        {/* Discovery Dropdown */}
        {isDiscoveryOpen && (
          <div className="sidebar_submenu">
            {["Grants", "Contributors", "Diversity", "Impacts", "Keywords"].map((item) => (
              <div
                key={item}
                className={`sidebar_submenu-item ${activeItem === item ? "active" : ""}`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Data Stories */}
        <div
          className={`sidebar_menu-item ${activeItem === "Data Stories" ? "active" : ""}`}
          onClick={() => setActiveItem("Data Stories")}
        >
          <div className="sidebar_menu-item-first-section">
            <DataExplorationIcon />
            <span>Data Stories</span>
          </div>
        </div>
        <div
          className={`sidebar_menu-item ${activeItem === "Predictions" ? "active" : ""}`}
          onClick={() => setActiveItem("Predictions")}
        >
          <div className="sidebar_menu-item-first-section">
            <InsightsIcon />
            <span>Predictions</span>
          </div>
        </div>
      </div>

      <div className="spacer" />

      {/* Bottom links */}
      <div className="sidebar_bottom-links">
        <div
         className={`sidebar_menu-item ${activeItem === "About Us" ? "active" : ""}`}
          onClick={() => setActiveItem("About Us")}
        >
          <div className="sidebar_menu-item-first-section">
            <span>About Us</span>
  
          </div>
          
        </div>
        <div
        className={`sidebar_menu-item ${activeItem === "Resources" ? "active" : ""}`}
          onClick={() => setActiveItem("Resources")}
        >
  <div className="sidebar_menu-item-first-section">
    <span>Resources</span>
  
  </div>
</div>
      </div>
    </div>
  );
};

export default Sidebar;