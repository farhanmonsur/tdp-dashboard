import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./filterbar.css";

const FilterBar = () => {
  const [discipline, setDiscipline] = useState("");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");

  const [openDropdown, setOpenDropdown] = useState(null); // "discipline" | "year" | "country" | null

  const disciplines = ["Engineering", "Science", "Business"];
  const years = ["2021", "2022", "2023"];
  const countries = ["Australia", "USA", "UK"];

  const resetFilters = () => {
    setDiscipline("");
    setYear("");
    setCountry("");
    setOpenDropdown(null);
  };

  const renderDropdown = (type, options, setter) => {
    if (openDropdown !== type) return null;
    return (
      <div className="filterbar_dropdown">
        {options.map((option) => (
          <div
            key={option}
            className="filterbar_dropdown-item"
            onClick={() => {
              setter(option);
              setOpenDropdown(null);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="filterbar">
      <div className="filterbar_item filterbar_label">Filter By</div>

      <div className="filterbar_dropdown-wrapper">
        <div
          className="filterbar_item"
          onClick={() => setOpenDropdown(openDropdown === "discipline" ? null : "discipline")}
        >
          {discipline || "Discipline"}
          <ArrowDropDownIcon />
        </div>
        {renderDropdown("discipline", disciplines, setDiscipline)}
      </div>

      <div className="filterbar_dropdown-wrapper">
        <div
          className="filterbar_item"
          onClick={() => setOpenDropdown(openDropdown === "year" ? null : "year")}
        >
          {year || "Year"}
          <ArrowDropDownIcon />
        </div>
        {renderDropdown("year", years, setYear)}
      </div>

      <div className="filterbar_dropdown-wrapper">
        <div
          className="filterbar_item"
          onClick={() => setOpenDropdown(openDropdown === "country" ? null : "country")}
        >
          {country || "Country"}
          <ArrowDropDownIcon />
        </div>
        {renderDropdown("country", countries, setCountry)}
      </div>

      <div className="filterbar_item filterbar_reset" onClick={resetFilters}>
        <RefreshIcon fontSize="small" />
        <span>Reset Filter</span>
      </div>
    </div>
  );
};

export default FilterBar;
