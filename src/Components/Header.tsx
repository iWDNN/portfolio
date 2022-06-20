import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Nav = styled(motion.nav)`
  width: 100%;
  height: 90px;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
`;
const Col = styled.div``;
const Logo = styled(motion.span)`
  font-size: 35px;
  letter-spacing: -1.7px;
  span {
    font-weight: 900;
  }
`;
const Items = styled.ul`
  display: flex;
  font-size: 16px;
  letter-spacing: -0.2px;
`;
const Item = styled.li`
  font-weight: 500;
  margin-left: 20px;
  color: #4b494b;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #000;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Nav>
        <Col>
          <Logo>
            <span>Pro</span>create
          </Logo>
        </Col>
        <Col>
          <Items>
            <Item>About</Item>
            <Item>Work</Item>
            <Item>Contact</Item>
          </Items>
        </Col>
      </Nav>
    </Wrapper>
  );
}
export default Header;
