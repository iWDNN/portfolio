import { motion } from "framer-motion";
import styled from "styled-components";

interface IIcon {
  src: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const Container = styled.section`
  width: 100%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 780px;
  height: 450px;
  border: 1px solid white;
`;
const TextBox = styled.div`
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
  width: 100%;
  height: 100%;
`;

const Phone = styled.div`
  width: 150px;
  height: 300px;
  border: 1px solid #727272;
  border-radius: 15px;
`;

const PhDisplay = styled(motion.div)`
  position: absolute;
  width: 140px;
  height: 260px;
  border: 1px solid #727272;
  background-color: rgba(255, 255, 255, 0.8);
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
  border: 1px solid #727272;
  border-radius: 5px;
  position: relative;
`;

const PcDisplay = styled.div`
  position: absolute;
  width: 350px;
  height: 180px;
  border: 1px solid #727272;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function About() {
  return (
    <Container>
      <Content>
        <TextBox>
          <h3>심플한 디자인</h3>
          <span>
            간결한 애니메이션과
            <br /> 심플한 UI를 추구합니다.
          </span>
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
          <h3>프로젝트</h3>
          <span>
            개인프로젝트에서 팀프로젝트까지
            <br /> 다양한 프로젝트 경험들
          </span>
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
          <span>
            앞으로의 개발 목표와
            <br /> 현재 배우고 있는 기술
          </span>
        </TextBox>
        <ImgBox>img</ImgBox>
      </Content>
    </Container>
  );
}
export default About;
