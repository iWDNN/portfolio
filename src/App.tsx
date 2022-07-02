import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 200vh;
  margin: 0 auto;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled(motion.div)`
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  h4 {
    font-weight: 500;
  }
  h3 {
    margin-top: 10px;
    font-weight: 500;
    font-size: 40px;
  }
  h2 {
    margin-top: 5px;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 10px;
  }
`;
const UnderBar = styled.span`
  margin-top: 5px;
  width: 310px;
  height: 5px;
  border-radius: 10px;
  background-color: black;
`;
const Intro = styled.div`
  margin-top: 50px;
  width: 1080px;
  border: 2px solid black;
  border-radius: 15px;
`;
const Skills = styled.div``;
const Projects = styled.div``;

const titleVar: Variants = {
  initial: {
    top: "40vh",
    left: "5vw",
    textAlign: "start",
  },
  animate: {
    top: "5vh",
    right: 0,
    left: 0,
    margin: "0 auto",
    textAlign: "center",
    transition: {
      type: "tween",
    },
  },
};
function App() {
  const { scrollY } = useViewportScroll();
  return (
    <Container>
      <Title>
        <h4>chanho-kim</h4>
        <h3>front-end</h3>
        <h2>portfolio</h2>
        <UnderBar />
      </Title>
      <Intro></Intro>
      <Skills>Skills</Skills>
      <Projects>Projects</Projects>
    </Container>
  );
}
export default App;
