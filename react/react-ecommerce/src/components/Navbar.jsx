import styled from "styled-components";
import {Link} from "react-router-dom";

// Styled component for the navigation bar container
const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  background-color: #333;
  padding: 10px 20px;
`;

// Styled component for the unordered list within the navigation bar
const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

// Styled component for the list items within the navigation bar
const NavbarItem = styled.li`
  display: inline;
  margin-right: 1rem;
`;

// Styled component for the links within the navigation bar
const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to={"/"}>Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={"/about"}>About Us</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={"/contact"}>Contact</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
