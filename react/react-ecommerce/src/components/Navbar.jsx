import styled from "styled-components";
import { Link } from "react-router-dom";
import { LuShoppingCart, LuUserCircle2 } from "react-icons/lu";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 4rem;
  position: sticky;
  background-color: #333;
`;

const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const NavbarItem = styled.li`
  align-items: center;
`;

const NavbarIcon = styled.div`
  transform: translate(0, 0.2rem);
  font-size: 1.5rem;
`;

const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 2rem;
  align-content: center;
  color: white;
  gap: 0.6rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const CartCounter = styled.div`
  display: block;
  z-index: 2;
  position: absolute;
  top: -10%;
  right: -50%;
  align-content: center;
  font-weight: bold;
  outline: 0.15rem solid #333;
  border-radius: 25rem;
  height: max-content;
  width: max-content;

  padding: 0.1rem 0.4rem;
  font-size: 0.6rem;
  color: #ffffff;
  background: #970030;
`;
const CartContainer = styled.div`
  position: relative;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink to={"/login"}>
            <NavbarIcon>{LuUserCircle2()}</NavbarIcon>
            <div>Login</div>
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={"/cart"}>
            <CartContainer>
              <CartCounter>1</CartCounter>

              <NavbarIcon>{LuShoppingCart()}</NavbarIcon>
            </CartContainer>
          </NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
