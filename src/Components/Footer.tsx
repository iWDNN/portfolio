import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  width: 1080px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 30px;
`;
const Items = styled.ul``;
const Item = styled.li`
  margin: 10px;
  font-size: 14px;
  color: #444044;
  &:first-child {
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 20px;
    color: #d6d5d7;
  }
`;
function Footer() {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
        </Grid>
        <Grid>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
          <Items>
            <Item>Discover</Item>
            <Item>connect</Item>
            <Item>what</Item>
            <Item>Mashimelro</Item>
          </Items>
        </Grid>
      </Container>
    </Wrapper>
  );
}
export default Footer;
