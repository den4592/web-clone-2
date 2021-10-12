import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-size: 4rem;
  color: #fff;
`;

const Ul = styled.ul`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  position: relative;
`;

const Li = styled.li`
  list-style: none;
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo>L</Logo>
        <Ul>
          <Li>
            <A href="#">ABOUT</A>
          </Li>
          <Li>
            <A href="#">ARTICLES</A>
          </Li>
          <Li>
            <A href="#">SUBSCRIBE</A>
          </Li>
        </Ul>
      </Container>
    </Nav>
  );
};

export default Navbar;
