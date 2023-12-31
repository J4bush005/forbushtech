import { Route, Routes } from "react-router-dom";
import Who from "./components/pages/Who";
import Open from "./components/pages/Open";
import "./index.css";
import styled from "styled-components";
import Particle from "./components/Particle";

function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: rgba(203, 178, 106);
  `;


  return (
    <div>
    <Container>
    <Particle/>
        <Routes>
           <Route index element={<Open />} />
          <Route path="/Who" element={<Who />} />
        </Routes>
        </Container>
    </div>
  );
}

export default App;
