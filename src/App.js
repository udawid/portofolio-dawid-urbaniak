import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const Body = styled.div`
  background-color: #1c1c27;
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Body>
        <Home />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Project />
        <Contact />
      </Body>
    </Router>
  );
}

export default App;
