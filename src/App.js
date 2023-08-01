import { Route, Routes } from 'react-router-dom';
import Who from './components/Who';
import Mission from './components/Mission';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Open from './components/Open';
import "./index.css";
import styled from 'styled-components';
import Particle from './components/Particle';
function App() {

 const Container = styled.div`
 height: 100vh;
 scrollbar-width: none;
 color: #be9e44;
 `
 
  return (
    <>
    <Container>
    <Particle/>
    <Routes>
    <Route index element={<Open />}/> 
    <Route path="/Who" element={<Who />}/>
    </Routes>
    </Container>
    </>
  );
}

export default App;
