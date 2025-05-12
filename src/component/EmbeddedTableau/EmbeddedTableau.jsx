import { useEffect } from 'react';
import "./EmbeddedTableau.css";

const TableauEmbed = ({ name, staticImage }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.type = 'text/javascript';
    document.getElementById(`vizContainer-${name}`).appendChild(script);
  }, [name, staticImage]);

  return (
    <div
      key={name} // this forces React to re-mount on name change
      className="tableauPlaceholder"
      id={`vizContainer-${name}`}
      style={{ position: 'relative' }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Tableau visualization"
            src={staticImage}
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value={name} />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value={staticImage} />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );
};

export default TableauEmbed;
