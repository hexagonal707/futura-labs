import styled from "styled-components";
import { ShoppingBagOutlined } from "@mui/icons-material/";

const MainContainer = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  color: white;
`;
const Heading = styled.div`
  font-size: 4rem;
  color: #e1e1e1;
  transform: translate(5%, 0%);
  font-weight: normal;
`;

const ShoppingBag = styled(ShoppingBagOutlined)`
  text-shadow: 0 0 0.2rem #ffffffaa;
  scale: 400%;
  color: #ffc142;
  transform: translate(-25%, -10%);
`;

const CartEmpty = () => {
  return (
    <MainContainer>
      <Heading>{<ShoppingBag />} is empty ¯\_(ツ)_/¯</Heading>
    </MainContainer>
  );
};

export default CartEmpty;
