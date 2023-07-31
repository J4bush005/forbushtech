import React from "react";
import { styled } from "styled-components";
import Header from "./Header";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Who = () => {
  return (
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
  );
};

export default Who;
