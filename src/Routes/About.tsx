import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
const Title = styled.h2``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px 0;
`;
const Item = styled.div`
  place-self: center;
  border: 5px solid black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 20px;
  }
`;

function About() {
  return (
    <Container>
      <Title>Skill Set</Title>
      <Grid>
        <Item>
          <span>HTML</span>
        </Item>
        <Item>
          <span>CSS</span>
        </Item>
        <Item>
          <span>JS</span>
        </Item>
        <Item>
          <span>TS</span>
        </Item>
      </Grid>
      <Grid>
        <Item>
          <span>React</span>
        </Item>
        <Item>
          <span>Vue</span>
        </Item>
      </Grid>
    </Container>
  );
}
export default About;
