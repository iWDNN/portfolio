import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { skillSet } from "./skillsData";
interface IText {
  size?: string;
  color?: string;
  weight?: number;
  space?: string;
  position?: string;
  top?: string;
  bottom?: string;
}
interface ITextBox {
  top?: string;
  bottom?: string;
}
const Background = styled.div`
  background-color: yellowgreen;
`;
const Section = styled.section<{ height?: string; bgColor: string }>`
  position: relative;
  background: ${(props) => props.bgColor};
  width: 100%;
  height: ${(props) => props.height};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div<ITextBox>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Text = styled.p<IText>`
  padding: 8px;
  text-align: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.space};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  span {
    width: 600px;
    line-height: 1.4;
  }
`;
const HeadingText = styled.h1`
  position: absolute;
  bottom: 300px;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 700;
  font-size: 25vw;
  letter-spacing: 10px;
  color: #3f72af;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 480px;
  position: relative;
  background-color: purple;
  color: white;
`;
const Skills = styled.ul`
  background-color: crimson;
`;
const Skill = styled.li`
  width: 100%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: 50px 2fr 4fr;
  align-items: center;
  background-color: black;
  p:first-child {
    padding-left: 20px;
  }
`;
const Bar = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: white;
`;
function App() {
  return (
    <>
      <Background>
        <Header />
        <Section bgColor={"pink"} height={"120vh"}>
          <TextBox top={"50px"}>
            <Text space={"1px"} size={"15px"} color={"#5c5b5c"} weight={500}>
              COMING SOON
            </Text>
            <Text size={"50px"} weight={700}>
              New Year's Revolution.
            </Text>
          </TextBox>
          <HeadingText>Pocket</HeadingText>
          <TextBox bottom={"0px"}>
            <Text size={"15px"} color={"#b21a59"} weight={800} space="1px">
              NEW PROJECT POCKET
            </Text>
            <Text size={"50px"} color={"#fff"} weight={700}>
              Everything, but small.
            </Text>
            <Text size={"17px"} color={"#949394"} weight={500}>
              <span>
                It's Procreate Pocket, but not as you know it. Be the first to
                know more, <br />
                sign up and find out soon.
              </span>
            </Text>
          </TextBox>
        </Section>
        <Section bgColor="beige" height="100vh">
          <ContentBox>
            <Text weight={800} size={"20px"}>
              Skills
            </Text>
            <Skills>
              {skillSet.map((skill, i) => (
                <Skill key={i}>
                  <Text weight={800}>{skill.initial}</Text>
                  <Text size={"14px"}>{skill.name}</Text>
                  <Bar />
                </Skill>
              ))}
            </Skills>
          </ContentBox>
          <ContentBox>
            <Text>Git & Blog</Text>
          </ContentBox>
        </Section>
        <Footer />
      </Background>
    </>
  );
}

export default App;
