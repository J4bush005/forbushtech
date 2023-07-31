import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import Header from "./Header";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Who = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1, delay: 2}}
    viewport={{once: true}}
    >
    <Section>
      <Header />
      <section id="open-heading">
      <div className="row">
        <div className="col-6">
          <div className="1-heading-text">Forbush Technologies</div>
        </div>
      </div>
      </section>
    </Section>
    </motion.div>
  );
};

export default Who;
