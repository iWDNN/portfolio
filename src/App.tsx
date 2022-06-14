import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./Components/Footer";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Noto Sans KR', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  color:inherit;
  text-decoration: none;
}
*{
  box-sizing: border-box;
}
`;

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
        <GlobalStyle />
        <Router />
        <Footer />
      </Background>
    </>
  );
}

export default App;
