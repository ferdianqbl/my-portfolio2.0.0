import React from "react";
import "./SideProjects.css";

import SideProjectItems from "../../json/sideProjects.json";
import { LightSpeed } from "@stahl.luke/react-reveal";
import SideProjectCard from "../../parts/SideProjectCard/PortfolioCard";

const SideProjects = () => {
  return (
    <div className="side-projects" id="side-projects">
      <div className="container">
        <LightSpeed left>
          <h1 className="section-heading">Side Projects</h1>
        </LightSpeed>
        <div className="row align-items-center">
          <SideProjectCard data={SideProjectItems} />
        </div>
      </div>
    </div>
  );
};

export default SideProjects;
