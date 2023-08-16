import React from "react";
import Cube from "../Shapes/Cube";

const Projects = () => {
  return (
    <div className="row">
      <h1 id="Heading" className="col-6 display-4">
        Empowering Change
        <div className="flex">
          <div className="x1 goldbar home">
            <div className="x1"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p id="body-text" className="fw-normal">
              our vision is to catalyze a global transformation through the
              power of technology. We envision a world where innovation knows no
              bounds, where technology becomes the driving force behind positive
              change. Through our relentless pursuit of excellence, we aim to
              empower industries, organizations, and individuals to unlock their
              full potential. By embracing cutting-edge solutions and fostering
              a culture of collaboration, we aspire to be at the forefront of
              advancements that shape the future. Our journey is guided by the
              belief that every technological stride we take is a step toward
              creating a world that is more connected, efficient, and remarkable
              for generations to come.
            </p>
          </div>
        </div>
      </h1>
      <div className="col-6">
        <Cube />
      </div>
    </div>
  );
};

export default Projects;
