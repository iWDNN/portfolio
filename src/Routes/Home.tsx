import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  box-sizing: border-box;
  height: 81.5vh;
  position: relative;
`;
const TopTitle = styled(motion.h3)`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  letter-spacing: -1px;
  span:first-child {
    font-size: 15px;
    color: #5c5b5c;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: 600;
  }
  span:last-child {
    color: #010001;
    font-size: 50px;
    font-weight: 700;
  }
`;
const BigTitle = styled(motion.h1)`
  position: absolute;
  bottom: 145px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-weight: 700;
  font-size: 350px;
  letter-spacing: 10px;
  color: #3f72af;
`;
const BottomTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
  span:first-child {
    font-size: 15px;
    color: #b21a59;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 800;
  }
  span:nth-child(2) {
    color: #fff;
    margin: 20px 0 40px 0;
    font-size: 50px;
    font-weight: 700;
  }
  span:last-child {
    width: 600px;
    color: #949394;
    text-align: center;
    font-weight: 500;
    line-height: 1.4;
  }
`;

const topAni: Variants = {
  top: {
    opacity: 1,
    y: 0,
  },
  scroll: {
    opacity: 0,
    y: 10,
    transition: {
      type: "tween",
    },
  },
};
const bigAni: Variants = {
  top: {
    color: "#3f72af",
  },
  scroll: {
    color: "#1E1D1C",
    transition: {
      type: "linear",
    },
  },
};
const botAni: Variants = {
  top: {
    opacity: 0,
    y: 20,
  },
  scroll: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
};

function Home() {
  const { scrollY } = useViewportScroll();
  const topTitleAni = useAnimation();
  const bigTitleAni = useAnimation();
  const botTitleAni = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
      if (scrollY.get() >= 200) {
        topTitleAni.start("scroll");
        bigTitleAni.start("scroll");
        botTitleAni.start("scroll");
      } else {
        topTitleAni.start("top");
        bigTitleAni.start("top");
        botTitleAni.start("top");
      }
    });
  }, [scrollY]);
  return (
    <>
      <Container>
        <TopTitle variants={topAni} animate={topTitleAni}>
          <span>Coming soon</span>
          <span>New Year's Revolution.</span>
        </TopTitle>

        <BigTitle
          variants={bigAni}
          animate={bigTitleAni}
          transition={{ type: "spring", duration: 1.5 }}
        >
          Pocket
        </BigTitle>
      </Container>
      <BottomTitle variants={botAni} animate={botTitleAni}>
        <span>NEW PROJECT POCKET</span>
        <span>Everything, but small.</span>
        <span>
          It's Procreate Pocket, but not as you know it. Be the first to know
          more, sign up and find out soon.
        </span>
      </BottomTitle>
    </>
  );
}
export default Home;
