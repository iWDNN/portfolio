import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Work from "./Components/Work";

const Background = styled(motion.div)`
  background-color: transparent;
`;

const bodyAni: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,1)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function App() {
  const { scrollY } = useViewportScroll();
  const background = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() >= 200) {
        background.start("top");
      } else {
        background.start("scroll");
      }
    });
  }, [scrollY]);
  return (
    <>
      <Background
        variants={bodyAni}
        animate={background}
        transition={{ type: "tween" }}
      >
        <Header />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </Background>
    </>
  );
}

export default App;
