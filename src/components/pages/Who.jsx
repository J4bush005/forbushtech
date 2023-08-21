import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../Header";
import Mission from "./Mission";
import Contact from "./Contact";
import LoadingParticle from "../LoadingParticle";
import Particle from "../Particle";
import Color from "../images/Color logo - no background.webp";
import Projects from "./Projects";
import Shpere from "../Shapes/Sphere";
import Media from "react-media";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Sectioned = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;
const Sections = styled.div`
  height: 150vh;
  scroll-snap-align: start;
`;
const Sectionss = styled.div`
  height: 70vh;
  scroll-snap-align: start;
`;
const Img = styled.img`
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(5px);
    }
  }
`;

const Who = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingParticle />
      ) : (
        <>
          <Media query="(max-width: 768px)">
            <>
            <Section>
              <Header />
              <section
                id="open-heading"
                className="d-flex justify-content-center align-items-center"
              >
                <div className="row">
                  <div className="col">
                    <Shpere />

                    <Img id="open-logo-sm" src={Color} className="img-fluid" />
                    <div
                      id="slogan"
                      className="row d-flex justify-content-center"
                      style={{fontSize: "x-large"}}
                    >
                      Innovate. Transform. Elevate.
                    </div>
                  </div>
                </div>
              </section>
            </Section>
            <Section>
            <Mission />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Sections>
            <Contact />
          </Sections>
          </>
          </Media>
          <Media query="(min-width: 769px)">
            <>
            <Sectioned>
             <Header/>
              <section
                id="open-heading"
                className="d-flex justify-content-center align-items-center"
              >
                <div className="row">
                  <div className="col-12">
                    <Shpere />

                    <Img id="open-logo" src={Color} className="img-fluid" />
                    <div
                      id="slogan"
                      className="row d-flex justify-content-center"
                    >
                      Innovate. Transform. Elevate.
                    </div>
                  </div>
                </div>
              </section>
            </Sectioned>
            <Sectionss>
            <Mission />
          </Sectionss>
          <Sectionss>
            <Projects />
          </Sectionss>
          <Sections>
            <Contact />
          </Sections>
          </>
          </Media>
          <Particle />
        </>
      )}
    </div>
  );
};

export default Who;
