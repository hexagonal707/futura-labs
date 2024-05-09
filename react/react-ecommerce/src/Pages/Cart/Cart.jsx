import { useSelector } from "react-redux";
import styled from "styled-components";
import CartEmpty from "../../components/CartEmpty.jsx";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 6rem 10% 0 10%;
  height: 100%;
  width: 100%;
  background-color: #171717;
  color: white;
  gap: 2rem;
`;
const CartListContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  background-color: #0c0c0c;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  max-height: 20rem;
  width: 30%;
  border-radius: 1rem;
  background-color: #0c0c0c;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8c6868;
`;

const Cart = () => {
  const CartData = useSelector((state) => state.phoneApiData.cartInfo);

  return CartData && CartData.length > 0 ? (
    <MainContainer>
      <CartListContainer>
        {CartData !== [] &&
          CartData.map((item) => (
            <ItemContainer key={item.id}>
              <h1>{item.brand}</h1>
            </ItemContainer>
          ))}
      </CartListContainer>
      <TotalPriceContainer>Cart Page</TotalPriceContainer>
    </MainContainer>
  ) : (
    <CartEmpty />
  );
};

export default Cart;
