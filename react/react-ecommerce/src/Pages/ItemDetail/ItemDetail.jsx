import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPhoneDetail } from "../../api.js";
import { useDispatch, useSelector } from "react-redux";
import { addCartInfo } from "../../Redux/phoneApiSlice.js";

const BtnAddToCart = styled.button`
  border: 0.1rem solid #595959;
  background: #0c0c0c;
  color: #ffffff;
  width: max-content;
  backdrop-filter: blur(2rem);
  font-size: 1rem;
  font-weight: bold;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem 0 #30303044;

  &:hover {
    transition: 100ms ease-in-out;
    background: #ffc142;
    box-shadow: 0 0 0.6rem 0 #ffc14266;
    color: black;
    font-weight: bold;
  }
`;
const BtnInCart = styled.button`
  border: 0.1rem solid #595959;
  background: #ffc142;
  color: black;
  font-weight: bold;
  width: max-content;
  backdrop-filter: blur(2rem);
  font-size: 1rem;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem 0 #30303044;

  &:hover {
  }
`;

const ItemDetail = () => {
  const itemId = useParams();
  console.log(itemId.id, "itemId");
  const dispatch = useDispatch();

  const [apiDataState, setApiDataState] = useState([]);

  const CartData = useSelector((state) => state.phoneApiData.cartInfo);

  console.log(CartData.brand);

  useEffect(() => {
    fetchPhoneDetail(itemId.id).then((item) => {
      setApiDataState(item);
    });
  }, [itemId.id]);
  ``;

  async function addToCart() {
    // apiDataState.in_cart = 0;
    // apiDataState.in_cart = apiDataState.in_cart + 1;

    apiDataState.quantity = apiDataState.quantity + 1;
    console.log("*************", apiDataState);
    dispatch(addCartInfo(apiDataState));
  }

  console.log(apiDataState && apiDataState.brand, "apiDataState");
  return apiDataState && apiDataState ? (
    <div>
      <div>Detail</div>
      <div>{apiDataState.brand}</div>

      <BtnAddToCart onClick={addToCart}>Add to Cart</BtnAddToCart>
    </div>
  ) : null;
};

export default ItemDetail;
