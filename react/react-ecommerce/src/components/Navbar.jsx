import styled from "styled-components";
import { Link } from "react-router-dom";
import { PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material/";

const NavbarContainer = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 2;
  margin: 1rem;
  position: fixed;
  border-radius: 1.2rem;
  justify-content: right;
  backdrop-filter: blur(1rem);
  background-color: rgba(66, 66, 66, 0.4);
  outline: 0.1rem solid #65656577;
`;

const NavbarList = styled.div`
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
  margin-right: 4rem;
  align-content: center;
  color: #e1e1e1;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const CartCounter = styled.div`
  display: block;
  z-index: 2;
  position: absolute;
  top: -5%;
  right: -40%;
  align-content: center;
  font-weight: bold;
  outline: 0.15rem solid #7a0000;
  border-radius: 25rem;
  height: max-content;
  width: max-content;
  padding: 0.1rem 0.4rem;
  font-size: 0.6rem;
  color: #e1e1e1;
  background: #a10000;
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
            <PersonOutlined style={{ scale: "110%" }} />
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to={"/cart"}>
            <CartContainer>
              <CartCounter>1</CartCounter>
              <NavbarIcon>
                <ShoppingBagOutlined style={{ color: "black" }} />
              </NavbarIcon>
            </CartContainer>
          </NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
