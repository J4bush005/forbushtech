import React from "react";
import Cubed from "../Shapes/Cubed";

const Do = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4  ">
          <Cubed />
        </div>
        <h1 id="Heading" className="col-6 display-4">
          What We Do
          <div className="flex">
            <div className="x1 goldbar home">
              <div className="x1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p id="body-texts" className="fw-normal">
                At Forbush Technologies, we specialize in crafting custom
                websites and apps from scratch, bypassing templates to ensure
                unique functionality and design. Our expertise extends to
                database development of any complexity, precisely tailored to
                your needs. Additionally, we provide reliable hosting services,
                ensuring secure accessibility for your digital assets. Whether
                creating new platforms or refining existing ones, we're
                dedicated to transforming your technological aspirations into
                reality.
              </p>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Do;
