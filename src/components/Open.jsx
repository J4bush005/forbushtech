import React, {useState, useEffect} from "react";
import { styled } from "styled-components";
import Logo from "../Logo.svg";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

`;



function Open() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[])
  return (
    <Section>
      <section id="open-logo" style={{transform: `translateY(${ offsetY * -0.7}px)`}}>
        <div className="row">
          <img src={Logo} alt=""/>
        </div>
      </section>
    </Section>
  );
}

export default Open;
