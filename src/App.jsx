import { useState } from "react";
import "./App.css";
import Sidebar from "./layout/sidebar/sidebar";
import Card from "./component/Card/Card";
import TableauEmbed from "./component/EmbeddedTableau/EmbeddedTableau";
import AboutUs from "./component/AboutUs/AboutUs";


function App() {
  const [activeItem, setActiveItem] = useState("Overview");

  const link = {
    overview: {
  name: "Overview_17470358854790/Overview",
  static_image: "https://public.tableau.com/static/images/Ov/Overview_17470358854790/Overview/1.png"
    },
    grants: {
      name: "Member2_17464727685390/Story2",
      static_image:
        "https://public.tableau.com/static/images/Me/Member2_17464727685390/Story2/1.png",
    },
    diversity: {
      name: "GenderEDA-Himeshi11/StoryofGenderDiversityinGrants",
      staticImage: "https://public.tableau.com/static/images/Ge/GenderEDA-Himeshi11/StoryofGenderDiversityinGrants/1.png",
    },
    
    
    impacts: {
      name: "Test_17440654636450/Dashboard3",
      staticImage:
        "https://public.tableau.com/static/images/Te/Test_17440654636450/Dashboard3/1.png",
    },
    contributors:{
      name:"Test_17440654636450/Dashboard4",
      staticImage:"https://public.tableau.com/static/images/Te/Test_17440654636450/Dashboard4/1.png"
    
    }
  };

  return (
    <div className="layout">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div>
        <nav>SNSF Automated Dashboard</nav>
        <div className="outlet_container">
          {activeItem === "Data Stories" ? (
            <Card />
          ) : activeItem === "About Us" ? (
            <AboutUs />
          ) : (
            <TableauEmbed
              name={link[activeItem.toLowerCase()]?.name}
              staticImage={link[activeItem.toLowerCase()]?.static_image}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
