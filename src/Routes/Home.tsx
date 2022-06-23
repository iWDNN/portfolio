import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 200vh;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 780px;
  height: 800px;
  border: 1px solid white;
`;
const TextBox = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 30px;
  }
  span {
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.6;
    color: #c8c8c8;
  }
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  div:first-child {
    width: 150px;
    height: 300px;
    border: 1px solid #727272;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:last-child {
    position: absolute;
    width: 140px;
    height: 260px;
    border: 1px solid #727272;
    background: url("https://blog.kakaocdn.net/dn/ccAEEe/btrFAaWs4lh/l31TYQ3xqwoX01EqlYzcCK/img.png");
    background-size: cover;
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
      <Grid>
        <TextBox>
          <h3>심플한 디자인</h3>
          <span>
            간결한 애니메이션과
            <br /> 심플한 UI를 추구합니다.
          </span>
        </TextBox>
        <ImgBox>
          <div></div>
          <div></div>
        </ImgBox>
      </Grid>
      <Grid>
        <TextBox>경험했던 프로젝트들</TextBox>
        <ImgBox>img</ImgBox>
      </Grid>
      <Grid>
        <TextBox>방향성</TextBox>
        <ImgBox>img</ImgBox>
      </Grid>
    </Container>
  );
}
export default Home;
