import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartEmpty from "../../components/CartEmpty.jsx";
import {
  addCartInfo,
  decQuantity,
  removeCartItem,
} from "../../Redux/phoneApiSlice.js";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 6rem 10% 0 10%;
  width: 100%;
  background-color: #171717;
  color: white;
  gap: 2rem;
`;
const CartListContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  border-radius: 1rem 1rem 0 0;
  background-color: #0c0c0c;
  gap: 4rem;
  height: 100vh;
`;

const PhoneLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: min-content;
  padding: 2rem;
  grid-gap: 2rem;
  color: #e6e6e6;
  border-radius: 1rem;
  background-color: #00a5ff19;
  outline: 0.1rem solid #00a5ff66;
  /*background-color: #ffe8000f;
  outline: 0.1rem solid #ffc14266;*/
`;

const PhoneImgContainer = styled.div`
  display: block;
  height: auto;
  align-content: center;
  width: min-content;
  position: relative;
`;

const PhoneImg = styled.img`
  display: flex;
  height: auto;
  width: 10rem;
  position: relative;
`;

const PhoneDetailContainer = styled.div`
  display: flex;
  width: 100%;
`;
const PriceHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 2rem;
`;
const PhoneNameHeading = styled.div`
  text-align: left;
  padding-top: 2rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  padding: 1rem;
  width: 15rem;
  border-radius: 0.3rem;
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnQuantity = styled.div`
  display: flex;
  margin: 2rem 0 0 4rem;
  scale: 150%;
  width: 5rem;
  justify-content: space-between;
  height: max-content;
  align-items: center;
  background: #151515;
  border-radius: 25rem;
`;

const BtnMinus = styled.button`
  height: 1rem;
  border: none;
  width: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 25rem;
  /*border-radius: 0.2rem 0 0 0.2rem;*/
`;
const BtnPlus = styled.button`
  height: 1rem;
  width: 1rem;
  border: none;
  text-align: center;
  font-weight: bold;
  border-radius: 25rem;
  /*border-radius: 0 0.2rem 0.2rem 0;*/
`;

const TotalPriceContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-direction: column;
  height: min(20rem);
  width: 35%;
  border-radius: 1rem;
  background-color: #0c0c0c;
  outline: 0.1rem solid #ffc14266;
`;

const ItemPriceContainer = styled.div`
  display: flex;
  font-weight: bold;
  padding: 0.5rem 0;
  width: 100%;
  justify-content: space-between;
`;
const BtnRemove = styled.button`
  border: none;
  background: white;
  border-radius: 1rem;
`;

const Cart = () => {
  const CartData = useSelector((state) => state.phoneApiData.cartInfo);
  /*const [alertState, setAlertState] = useState(false);*/
  console.log(CartData);
  const price = CartData.map((li) => {
    return li.price.inr * li.quantity;
  });

  console.log("price", price);

  const totalPrice = price.reduce((a, b) => {
    return a + b;
  });

  console.log("totalprice", totalPrice);

  const dispatch = useDispatch();

  function addQuantity(item) {
    dispatch(addCartInfo(item));
  }

  function subQuantity(item) {
    dispatch(decQuantity(item));
  }

  function removeItem(item) {
    dispatch(removeCartItem(item));
  }

  return CartData && CartData.length > 0 ? (
    <MainContainer>
      <CartListContainer>
        {CartData !== [] &&
          CartData.map((item) => (
            <PhoneLayoutContainer key={item.id}>
              <PhoneImgContainer>
                <PhoneImg src={item.img} alt="" />
              </PhoneImgContainer>
              <PhoneDetailContainer>
                <div>
                  <PhoneNameHeading>
                    {`${item.brand} ${item.model}`}
                  </PhoneNameHeading>
                  <SpecsContainer>
                    <Specs>
                      <span>
                        <b style={{ color: "#a6a6a6" }}>•&emsp;Display Size</b>
                      </span>{" "}
                      <span>{item.display_size_inches} inches</span>
                    </Specs>

                    <Specs>
                      <span>
                        <b style={{ color: "#a6a6a6" }}>•&emsp;RAM</b>
                      </span>{" "}
                      <span>{item.ram_gb} GB</span>
                    </Specs>
                    <Specs>
                      <span>
                        <b style={{ color: "#a6a6a6" }}>•&emsp;Storage</b>
                      </span>{" "}
                      <span>{item.storage_gb} GB</span>
                    </Specs>
                    <Specs>
                      <span>
                        <b style={{ color: "#a6a6a6" }}>•&emsp;Release Year</b>
                      </span>{" "}
                      <span>{item.release_year}</span>
                    </Specs>
                  </SpecsContainer>
                </div>
              </PhoneDetailContainer>
              <PriceHeading>
                <div>
                  <div style={{ margin: "1rem 0" }}> {item.star_rating}</div>
                  <div>₹{item.price && item.price.inr}&nbsp;</div>
                </div>
                <BtnQuantity>
                  <BtnMinus onClick={() => subQuantity(item)}>
                    <div style={{ transform: "translate(0, -10%)" }}>-</div>
                  </BtnMinus>
                  <div style={{ fontSize: "0.6rem" }}>
                    <b>Qty. {item.quantity}</b>
                  </div>
                  <BtnPlus onClick={() => addQuantity(item)}>
                    <div style={{ transform: "translate(0, -10%)" }}>+</div>
                  </BtnPlus>
                </BtnQuantity>
                <BtnRemove onClick={() => removeItem(item)}>
                  <RemoveShoppingCartOutlined />
                </BtnRemove>
              </PriceHeading>
            </PhoneLayoutContainer>
          ))}
      </CartListContainer>
      <TotalPriceContainer>
        <div>
          {CartData.map((item) => {
            return (
              <ItemPriceContainer key={item.id}>
                <div>
                  {item.brand} {item.model} x {item.quantity}
                </div>
                <div>₹{item.price.inr * item.quantity}</div>
              </ItemPriceContainer>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          <div>Total</div>
          <div>₹{totalPrice}</div>
        </div>
      </TotalPriceContainer>
    </MainContainer>
  ) : (
    <CartEmpty />
  );
};

export default Cart;
