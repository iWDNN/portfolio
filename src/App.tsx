import { motion } from "framer-motion";
import styled from "styled-components";
import { skills } from "./data";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 20px;
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
  width: 1080px;
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
  padding: 20px;
  a {
    padding: 5px 100px;
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
    padding: 20px 0;
  }
  ul {
    display: flex;
    padding: 0 20px;
    li {
      border: 1px solid black;
      margin: 0 5px;
      padding: 10px 20px;
      border-radius: 20px;
    }
  }
`;
const Projects = styled.div``;

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
        <LinkBox>
          <a>Github</a>
          <a>Tistory</a>
          <a>Gmail</a>
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
      </Intro>
      <Skills>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </Skills>
      <Projects>Projects</Projects>
    </Container>
  );
}
export default App;
