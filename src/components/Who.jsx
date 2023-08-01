import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import Header from "./Header";
import Mission from "./Mission";
import Contact from "./Contact";
import LoadingParticle from "./LoadingParticle";
import Open from "./Open";
import App from "../App";
import Particle from "./Particle";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Who = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div>
    {
      loading ?
      <LoadingParticle/>
      :
      <>
       <Header/>
        <Section>
      <section id="open-heading">
      <div className="row">
        <div className="col-6">
          <div>Who</div>
        </div>
      </div>
      </section>
    </Section>
     <Section>
    <Mission />
    </Section>
     <Section>
    <Contact />
    </Section>
       <Particle />
       </>
    }
     

   

   
    </div>
  );
};

export default Who;
