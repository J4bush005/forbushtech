import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../Logo.svg";

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Open() {
  return (
    <Section>
      <section>
        <Link className="links" to={"/Who"}>
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <img className="img-fluid" src={Logo} alt="" />
            </div>
          </div>
          <div className="row">
            <p id="click">click here</p>
          </div>
        </Link>
      </section>
    </Section>
  );
}

export default Open;
