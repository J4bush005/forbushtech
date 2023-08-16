import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../Header";
import Mission from "./Mission";
import Contact from "./Contact";
import LoadingParticle from "../LoadingParticle";
import Particle from "../Particle";
import Color from "../images/Color logo - no background.png";
import Projects from "./Projects";
import Shpere from "../Shapes/Sphere";
import Media from "react-media";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  
`;
const Img = styled.img`
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(15px);
    }
  }
`;

const Who = () => {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingParticle />
      ) : (
        <>
        <Media query="(min-width: 769px)">
          <Section>
           <Header />
            <section id="open-heading" className="d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-12">
                 <Shpere />
                 
                   <Img id="open-logo" src={Color} className="img-fluid" />
                   <div id="slogan" className="row d-flex justify-content-center">
                  Innovate. Transform. Elevate.
                </div> 
                
                </div>
               
              </div>
            </section>
            
          </Section>
          </Media>
          <Section>
            <Mission />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section>
            <Contact />
          </Section>
          <Particle />
        </>
      )}
    </div>
  );
};

export default Who;
