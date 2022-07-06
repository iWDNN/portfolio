import { motion, useTransform, useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { projects, skills } from "./data";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: white;
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
  margin-top: 10px;
  width: 310px;
  height: 5px;
  border-radius: 10px;
  background-color: white;
`;
const Intro = styled.div`
  width: 100%;
`;

const Scene = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  h3 {
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 10px;
  }
  span {
    line-height: 1.4;
  }
`;
const Phone = styled.div``;
const Monitor = styled.div``;
const Coding = styled.div``;

const Activity = styled.div`
  width: 1080px;
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  background-color: ${(props) => props.theme.col2};
  color: white;
  p {
    display: block;
    border: 1px solid black;
    padding: 20px;
    border-radius: 15px;
    line-height: 1.4;
  }
`;
const LinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  a {
    padding: 7px 100px;
    border: 1px solid black;
    border-radius: 20px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
const Skills = styled.div`
  width: 100%;
  padding: 20px;
  h2 {
    font-size: 48px;
    letter-spacing: 2px;
  }
  ul {
    margin-top: 40px;
    display: flex;
    padding: 0 20px;
    li {
      padding: 10px 20px;
      border: 1px solid black;
      border-radius: 20px;
      margin-right: 20px;
    }
  }
`;

const Projects = styled.div`
  width: 100%;
  padding: 20px;
  h2 {
    font-size: 48px;
    letter-spacing: 2px;
    padding: 20px 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;
const Project = styled.li<{ dir?: string }>`
  display: flex;
  justify-content: ${(props) => props.dir};
  div {
    padding: 30px 20px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 40px 0;
  }
`;

function App() {
  return (
    <Container>
      <Title>
        <h4>chanho-kim</h4>
        <h3>front-end</h3>
        <h2>portfolio</h2>
        <UnderBar />
      </Title>
      <Intro>
        <Scene>
          <Phone></Phone>
          <TextBox>
            <h3>심플한 디자인</h3>
            <span>
              간결한 애니메이션과
              <br /> 심플한 UI를 추구합니다.
            </span>
          </TextBox>
        </Scene>
        <Scene>
          <Monitor></Monitor>
        </Scene>
        <Scene>
          <Coding></Coding>
        </Scene>
      </Intro>
      <Activity>
        <LinkBox>
          <a>Github</a>
          <a>Tistory</a>
          <a>Gmail</a>
          <a>Hello</a>
        </LinkBox>
        <p>
          안녕하세요 프론트엔드 개발자를 지향하는 ???입니다.
          <br /> 대학 시절 프론트엔드에 첫 접근하게 되었고, 팀프로젝트로 관심을
          갖게 되었습니다.
          <br /> 그 후 작은 작업이나 개인 프로젝트들을 진행해가며, 프론트엔드에
          전반적인 흐름에 대해 알아가고 있습니다.
          <br />
          재사용성 있는 코드, 클린코딩를 지향 할수 있도록 나아가는 중입니다.
        </p>
      </Activity>
      <Skills>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </Skills>
      <Projects>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, i) => (
            <Project key={i} dir={i % 2 == 0 ? "flex-start" : "flex-end"}>
              <div>
                1.프로젝트명 :{project.title}
                <br />
                2.제작기간 :{project.period}
                <br />
                3.사용된 기술들 :{project.skills}
                <br />
                4.간단한 설명 :{project.desc}
                <br />
                5.주요 기능 :{project.feature}
                <br />
              </div>
            </Project>
          ))}
        </ul>
      </Projects>
    </Container>
  );
}
export default App;
