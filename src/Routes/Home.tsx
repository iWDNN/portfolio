import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainText = styled(motion.div)`
  padding: 50px;
  span {
    font-size: 20px;
  }
  h2 {
    margin-top: 17px;
    font-size: 25px;
    line-height: 1.3;
  }
`;

const TextBoxVar: Variants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  start: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      staggerChildren: 0.8,
    },
  },
};

function Home() {
  return (
    <Container>
      <MainText variants={TextBoxVar} initial="initial" animate="start">
        <motion.span variants={TextBoxVar}>안녕하세요</motion.span>
        <motion.h2 variants={TextBoxVar}>
          저의 포트폴리오에 오신 걸 환영합니다
          <br />
          편하게 봐주시면 좋겠습니다.
        </motion.h2>
      </MainText>
    </Container>
  );
}
export default Home;
