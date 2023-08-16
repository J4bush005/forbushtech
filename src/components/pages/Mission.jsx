import React from "react";
import Cube from "../Shapes/Cubes";
import Media from "react-media";

const Mission = () => {
  return (
    <Media query="(min-width: 769px)">
      <div className="row">
        <div className="col-6">
          <Cube />
        </div>
        <h1 id="Heading" className="col-6 display-4">
          Our Commitment to Quality
          <div className="flex">
            <div className="x1 goldbar home">
              <div className="x1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p id="body-texts" className="fw-normal">
                At Forbush Technologies, we stand as the embodiment of
                excellence in all that we do. We are dedicated to pushing the
                boundaries of innovation, producing solutions that set new
                standards in quality. Our unwavering commitment to delivering
                excellence permeates every facet of our work, from
                groundbreaking technological advancements to unparalleled
                customer service. With a relentless pursuit of perfection, we
                redefine what is possible, ensuring that each endeavor we
                undertake is a testament to our uncompromising dedication to
                excellence.
              </p>
            </div>
          </div>
        </h1>
      </div>
    </Media>
  );
};

export default Mission;
