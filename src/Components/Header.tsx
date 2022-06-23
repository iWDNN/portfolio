import { AnimatePresence, motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const SpaceCt = styled.div`
  width: 100%;
  height: 66px;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 66px;
  width: 100%;
  border-bottom: 1px solid #2a2a2a;
  background-color: #1a1a1a;
`;
const Nav = styled.nav`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: white;
`;
const Col = styled.ul`
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 17px;
  letter-spacing: 2px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #8a8a8a;
  }
  a {
    position: relative;
    padding: 20px 0;
  }
`;
const Items = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Item = styled.li<{ isActive: boolean }>`
  place-self: center;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #8a8a8a;
  }
  a {
    position: relative;
    display: block;
    padding: 25px;
  }
`;
const UnderLine = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 2px;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 7px;
  background-color: white;
`;

function Header() {
  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("about");
  const workMatch = useMatch("work");
  const contactMatch = useMatch("contact");

  return (
    <>
      <SpaceCt />
      <Container>
        <Nav>
          <AnimatePresence>
            <Col>
              <Logo>
                <Link to="/">
                  iWDNN{homeMatch && <UnderLine layoutId="1" />}
                </Link>
              </Logo>
            </Col>
            <Col>
              <Items>
                <Item isActive={aboutMatch !== null}>
                  <Link to="/about">
                    소개{aboutMatch && <UnderLine layoutId="1" />}
                  </Link>
                </Item>
                <Item isActive={workMatch !== null}>
                  <Link to="/work">
                    프로젝트{workMatch && <UnderLine layoutId="1" />}
                  </Link>
                </Item>
                <Item isActive={contactMatch !== null}>
                  <Link to="/contact">
                    마무리{contactMatch && <UnderLine layoutId="1" />}
                  </Link>
                </Item>
              </Items>
            </Col>
            <Col></Col>
          </AnimatePresence>
        </Nav>
      </Container>
    </>
  );
}
export default Header;
