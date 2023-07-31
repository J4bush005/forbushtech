import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Who from './components/Who';
import Mission from './components/Mission';
import Projects from './components/Projects';
import Contact from './components/Contact';
import "./index.css";
import styled from 'styled-components';
import {Parallax, ParallaxLayer} from 'react-spring';
import Particle from './components/Particle';
function App() {

 const Container = styled.div`
 height: 100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior: smooth;
 overflow-y: auto;
 scrollbar-width: none;
 &::-webkit-scrollbar{
  display: none
 }
 color: #be9e44;
 `
  return (
    <>
    <Particle/>
    <Container>
    
    <Who />
    <Mission />
    <Projects />
    <Contact />
    </Container>
    </>
  );
}

export default App;
