import styled from "styled-components";
import { Link } from "react-router-dom";
import { PersonOutlined, ShoppingBagOutlined } from "@mui/icons-material/";
import { useSelector } from "react-redux";

const NavbarContainer = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  margin: 2rem;
  justify-self: center;
  height: 4rem;
  width: 50%;
  z-index: 2;
  position: fixed;
  border-radius: 1rem;
  justify-content: right;
  backdrop-filter: blur(2rem);
  background: #ffc14222;
  /*background-color: rgb(14, 14, 14);*/
  outline: 0.1rem solid #ffc14266;
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
  color: #ffe2a6;
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
  border-radius: 2rem;
  height: max-content;
  width: max-content;
  padding: 0.1rem 0.4rem;
  font-size: 0.6rem;
  color: black;
  background: #fbaa00ff;
`;
const CartContainer = styled.div`
  position: relative;
`;

const Navbar = () => {
  const CartData = useSelector((state) => state.phoneApiData.cartInfo);
  const totalQuantity = CartData.map((item) => {
    return item.quantity;
  });

  console.log(
    totalQuantity,
    "/*///////////////////////////////////////////////////////",
  );
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
              <CartCounter>{CartData && CartData.length}</CartCounter>
              <NavbarIcon>
                <ShoppingBagOutlined />
              </NavbarIcon>
            </CartContainer>
          </NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
