import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
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
  border: 1px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  margin-left: 100px;
  h3 {
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 10px;
  }
  span {
    line-height: 1.4;
  }
`;
const Phone = styled(motion.div)`
  width: 180px;
  height: 360px;
  background-color: black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PScreen = styled(motion.div)`
  width: 170px;
  height: 345px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const PApp = styled(motion.div)`
  place-self: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
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

const PhoneVar: Variants = {
  initial: {
    opacity: 0,
  },
  start: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};
const PAppVar: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  start: {
    opacity: 1,
    y: 0,
  },
};
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
          <Phone>
            <PScreen variants={PhoneVar} initial="initial" animate="start">
              <PApp variants={PAppVar} />
              <PApp variants={PAppVar} />
              <PApp variants={PAppVar} />
              <PApp variants={PAppVar} />
            </PScreen>
          </Phone>
          <TextBox>
            <h3>????????? ?????????</h3>
            <span>
              ????????? ??????????????????
              <br /> ????????? UI??? ???????????????.
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
          ??????????????? ??????????????? ???????????? ???????????? ????????????.
          <br /> ?????? ?????? ?????????????????? ??? ???????????? ?????????, ?????????????????? ?????????
          ?????? ???????????????.
          <br /> ??? ??? ?????? ???????????? ?????? ?????????????????? ???????????????, ??????????????????
          ???????????? ????????? ?????? ???????????? ????????????.
          <br />
          ???????????? ?????? ??????, ??????????????? ?????? ?????? ????????? ???????????? ????????????.
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
                1.??????????????? :{project.title}
                <br />
                2.???????????? :{project.period}
                <br />
                3.????????? ????????? :{project.skills}
                <br />
                4.????????? ?????? :{project.desc}
                <br />
                5.?????? ?????? :{project.feature}
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
