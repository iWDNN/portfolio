import { AnimatePresence, motion, Variants } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 700;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0;
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
  background-color: black;
  span {
    font-weight: 700;
    font-size: 23px;
    color: white;
  }
`;
const Bar = styled(motion.div)`
  position: absolute;
  bottom: 25px;
  left: 50px;
  width: 50%;
  height: 5px;
  border-radius: 10px;
  background-color: white;
`;

interface ISkillSet {
  name: string;
  score: number;
  color: string;
  subColor?: string;
}

const barVar: Variants = {
  initial: {
    width: 0,
  },
  start: (score: number) => ({
    width: score,
  }),
};

function About() {
  const skillSet: ISkillSet[] = [
    { name: "HTML", score: 80, color: "#D84925", subColor: "#E77142" },
    { name: "CSS", score: 70, color: "#2449D9", subColor: "#30A0D1" },
    { name: "JavaScript", score: 70, color: "#D99A26", subColor: "#E5B525" },
    { name: "TypeScript", score: 50, color: "#072E5C", subColor: "#0174C2" },
    { name: "React", score: 50, color: "#1D2027", subColor: "#5BD0ED" },
    { name: "Vue", score: 40, color: "#32455A", subColor: "#3daf7d" },
  ];
  return (
    <Container>
      <Title>Skill Set</Title>
      <Grid>
        {skillSet.map((content, n) => (
          <Item key={n}>
            <span>{content.name}</span>
            <Bar
              custom={content.score}
              variants={barVar}
              initial="initial"
              animate="start"
              transition={{ type: "tween", duration: 3 }}
            />
          </Item>
        ))}
      </Grid>
    </Container>
  );
}
export default About;
