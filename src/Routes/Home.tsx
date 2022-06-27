import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { barData } from "../data";

interface IIcon {
  src: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
const Container = styled.section`
  width: 100%;
  color: black;
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
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 780px;
  height: 450px;
`;
const TextBox = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
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
  width: 100%;
  height: 100%;
`;

const Phone = styled.div`
  width: 150px;
  height: 300px;
  border-radius: 15px;
  background-color: #282c35;
`;

const PhDisplay = styled(motion.div)`
  position: absolute;
  width: 140px;
  height: 260px;
  background-color: #dadadb;
`;
const Grid = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Item = styled(motion.div)`
  place-self: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Icon = styled.div<IIcon>`
  position: absolute;
  width: 100px;
  height: 100px;
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;

const Pc = styled.div`
  width: 360px;
  height: 200px;
  border-radius: 15px;
  position: relative;
  background-color: #282c35;
`;

const PcDisplay = styled.div`
  position: absolute;
  width: 330px;
  height: 170px;
  background-color: #3d434f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Coding = styled.div`
  width: 200px;
  height: 300px;
  padding: 20px 0;
  border-radius: 15px;
  background-color: #323641;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
const BlankBar = styled.div`
  place-self: center;
  width: 80%;
  height: 2px;
  background-color: #2a2e39;
  border-radius: 5px;
  position: relative;
`;
const Bar = styled.div<{ barColor: string; x: string }>`
  position: absolute;
  width: ${(props) => props.x};
  height: inherit;
  border-radius: inherit;
  background-color: ${(props) => props.barColor};
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
      <Content>
        <TextBox>
          <h3>심플한 디자인</h3>
          <span>간결한 애니메이션과 심플한 UI를 추구합니다.</span>
        </TextBox>
        <ImgBox>
          <Phone />
          <PhDisplay>
            <Grid>
              <Item />
              <Item />
              <Item />
              <Item />
            </Grid>
          </PhDisplay>
        </ImgBox>
      </Content>
      <Content>
        <TextBox>
          <h3>프로젝트의 경험</h3>
          <span>개인프로젝트에서 팀프로젝트까지 다양한 프로젝트 경험들</span>
        </TextBox>
        <ImgBox>
          <Pc />
          <PcDisplay>
            <Icon
              src={
                "https://blog.kakaocdn.net/dn/exVmde/btrE7xjPKlS/KayMasQXKbQuBuMnjhKpKk/img.png"
              }
              left={"20px"}
            />
            <Icon
              src={
                "https://blog.kakaocdn.net/dn/nKtm6/btrE4TBohvC/2ncvyr9lnpDiFffJVYOuQK/img.png"
              }
            />
            <Icon
              src={
                "https://blog.kakaocdn.net/dn/b53Cnw/btrE4B8RhEe/OVpuzONIl4FhS46yZIMxf1/img.png"
              }
              right={"20px"}
            />
          </PcDisplay>
        </ImgBox>
      </Content>
      <Content>
        <TextBox>
          <h3>방향성</h3>
          <span>기본기를 다져나가며 클린코딩을 향해 나아갈 것입니다.</span>
        </TextBox>
        <ImgBox>
          <Coding>
            {barData.map((data, i) => (
              <BlankBar key={i}>
                <Bar barColor={data.color} x={data.width} />
              </BlankBar>
            ))}
          </Coding>
        </ImgBox>
      </Content>
    </Container>
  );
}
export default Home;
