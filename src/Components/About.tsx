import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { skillSet } from "../skillsData";

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  color: white;
`;
const Section = styled.section`
  margin-bottom: 50px;
`;
const Title = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
`;
const Grid = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
const Item = styled(motion.div)`
  position: relative;
  place-self: center;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.3;
  border-radius: 5px;
  background-color: #1a1a1a;
  svg {
    margin-bottom: 5px;
  }
  span {
    font-weight: 700;
    font-size: 23px;
  }
`;
const Bar = styled(motion.div)`
  position: absolute;
  width: 50%;
  bottom: 25px;
  left: 50px;
  height: 5px;
  border-radius: 10px;
  background-color: white;
`;

const barVar: Variants = {
  initial: {
    width: 0,
  },
  start: (score: number) => ({
    width: score,
  }),
};

function About() {
  return (
    <Container>
      <Section>
        <Title>Skills</Title>
        <Grid>
          {skillSet.map((content, n) => (
            <Item
              key={n}
              style={{
                background: `linear-gradient(135deg , ${content.color}, ${content.subColor})`,
              }}
            >
              <span>{content.name}</span>
              <Bar
                custom={content.score}
                variants={barVar}
                transition={{ type: "tween", duration: 0.2 }}
              />
            </Item>
          ))}
        </Grid>
      </Section>
      <Section>
        <Title>Git & Blog</Title>
        <Grid>
          <Item>
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span>github</span>
          </Item>
          <Item>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              viewBox="0 0 408.4 408.4"
              fill="white"
            >
              <g>
                <circle cx="58.18" cy="58.18" r="58.18" />
                <circle cx="204.2" cy="58.18" r="58.18" />
                <circle cx="204.2" cy="204.2" r="58.18" />
                <circle cx="204.2" cy="350.22" r="58.18" />
                <circle cx="350.22" cy="58.18" r="58.18" />
              </g>
            </svg>
            <span>blog</span>
          </Item>
        </Grid>
      </Section>
    </Container>
  );
}
export default About;
