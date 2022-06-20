import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { skillSet, works } from "./data";
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
const Background = styled(motion.div)``;
const Section = styled.section<{ height?: string; bgColor?: string }>`
  position: relative;
  background: ${(props) => props.bgColor};
  width: 100%;
  height: ${(props) => props.height};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
`;
const TextBox = styled(motion.div)<ITextBox>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Text = styled.p<IText>`
  padding: 8px;
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

const HeadingText = styled(motion.h1)`
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

const ContentBox = styled.div<{ width: string }>`
  width: 100%;
  max-width: ${(props) => props.width};
  position: relative;
  background-color: purple;
  color: white;
  margin-bottom: 20px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: blanchedalmond;
  padding: 10px;
  gap: 10px;
`;
const Item = styled.div`
  background-color: goldenrod;
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

const Works = styled.ul`
  width: 100%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Work = styled.li`
  width: 380px;
  position: relative;
  place-self: center;
  border-radius: 10px;
  background-color: #121212;
  padding: 10px;
  color: white;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const WorkItem = styled.div``;
const Img = styled.div<{ link: string }>`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background: url(${(props) => props.link});
  background-size: cover;
  background-position: center center;
`;

const backgroundVar: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};
const textBoxVar: Variants = {
  top: {
    opacity: 1,
    y: 0,
  },
  scroll: {
    opacity: 0,
    y: 20,
  },
};

const colorVar: Variants = {
  top: {
    color: "#000",
  },
  scroll: {
    color: "#fff",
  },
};

function App() {
  const { scrollY } = useViewportScroll();

  const backgroundAni = useAnimation();
  const textBoxAni = useAnimation();
  const HeadingTextAni = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
      if (scrollY.get() <= 265) {
        backgroundAni.start("top");
        textBoxAni.start("top");
        HeadingTextAni.start("top");
      } else {
        backgroundAni.start("scroll");
        textBoxAni.start("scroll");
        HeadingTextAni.start("scroll");
      }
    });
  }, [scrollY]);
  return (
    <>
      <Background
        variants={backgroundVar}
        animate={backgroundAni}
        transition={{ type: "tween", duration: 0.7 }}
      >
        <Header />
        <Section height={"120vh"}>
          <TextBox variants={textBoxVar} animate={textBoxAni} top={"50px"}>
            <Text space={"1px"} size={"15px"} color={"#5c5b5c"} weight={500}>
              COMING SOON
            </Text>
            <Text size={"50px"} weight={700}>
              New Year's Revolution.
            </Text>
          </TextBox>
          <HeadingText variants={colorVar} animate={HeadingTextAni}>
            Pocket
          </HeadingText>
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
        <Section bgColor="beige">
          <ContentBox width={"480px"}>
            <Text size={"50px"} weight={700}>
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
        </Section>
        <Section bgColor="Black" height={"100vh"}>
          <TextBox top={"20px"}>
            <Text color={"white"} size={"50px"} weight={700}>
              Work
            </Text>
          </TextBox>
          <Works>
            {works.map((work, i) => (
              <Work key={i}>
                <WorkItem>
                  <Img link={work.logoUrl} />
                  <Text size={"20px"} weight={700}>
                    {work.language}
                  </Text>
                </WorkItem>
                <WorkItem>
                  <Text weight={700}>{work.title}</Text>
                  <Text>{work.overview}</Text>
                </WorkItem>
              </Work>
            ))}
          </Works>
        </Section>
        <Section bgColor="blue">
          <ContentBox width={"980px"}>
            <Text size={"50px"} weight={700}>
              Contact
            </Text>
            <Grid>
              <Item>
                <Img
                  link={
                    "https://blog.kakaocdn.net/dn/JDpme/btrE76gpvNU/7JkHwRkWdqWZxQ09cUkPx0/img.png"
                  }
                />
                <Text size={"30px"} weight={700}>
                  Github
                </Text>
              </Item>
              <Item>
                <Img
                  link={
                    "https://blog.kakaocdn.net/dn/KFCTK/btrFbNGTnTa/ws0fqVZ1FZQMKbGiKQJJ10/img.png"
                  }
                />
                <Text size={"30px"} weight={700}>
                  Blog
                </Text>
              </Item>
            </Grid>
          </ContentBox>
          <br />
        </Section>
        <Footer />
      </Background>
    </>
  );
}

export default App;
