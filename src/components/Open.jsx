import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Logo from "../Logo.svg";
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Open() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (

    
    <Section>
      <section
        id="open-logo"
        style={{ transform: `translateY(${offsetY * -0.7}px)` }}
      >
        <Link className="links" to={"/Who"}>
          <div className="row">
            <img className="img-fluid" src={Logo} alt="" />
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
