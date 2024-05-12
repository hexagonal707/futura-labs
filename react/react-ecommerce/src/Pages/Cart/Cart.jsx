import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartEmpty from "../../components/CartEmpty.jsx";
import {
  addCartInfo,
  decQuantity,
  removeCartItem,
} from "../../Redux/phoneApiSlice.js";
import {
  RemoveShoppingCartOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 8% 10% 0 10%;
  width: 100%;
  background-color: #171717;
  color: white;
  gap: 2rem;
`;
const CartListContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  border-radius: 1rem 1rem 0 0;
  border-top: 0.1rem solid #ffc14266;
  border-left: 0.1rem solid #ffc14266;
  border-right: 0.1rem solid #ffc14266;
  background-color: #0c0c0c;
  min-height: 100vh;
`;

const PhoneLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: min-content;
  padding: 2rem;
  grid-gap: 2rem;
  color: #e6e6e6;
  border-top: 0.1rem solid #ffc14266;
  border-bottom: 0.1rem solid #ffc14266;
  /*border-radius: 1rem;
      background-color: #00a5ff19;
      outline: 0.1rem solid #00a5ff66;*/
  background-color: #ffe8000f;
  /*outline: 0.1rem solid #ffc14266;*/
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
  align-items: end;
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
  width: max-content;
  justify-content: space-between;
  height: max-content;
  align-items: center;
  background: #151515;
  border-radius: 0.4rem;
  outline: 0.1rem solid #ffc14266;
  border: none;
`;

const BtnMinus = styled.button`
  height: 1.2rem;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;
  border-right: 0.1rem solid #ffc14266;
  width: 1.4rem;
  text-align: center;
  color: white;
  border-radius: 0.4rem 0 0 0.4rem;
  background: #ffc14222;
  &:hover {
    cursor: pointer;
    background: #ffc14244;
  }
`;
const BtnPlus = styled.button`
  height: 1.2rem;
  border-left: 0.1rem solid #ffc14266;
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  width: 1.4rem;
  text-align: center;
  font-weight: bold;
  color: white;
  border-radius: 0 0.4rem 0.4rem 0;
  background: #ffc14222;

  &:hover {
    cursor: pointer;
    background: #ffc14244;
  }
`;

const BtnRemove = styled.button`
  padding: 0.4rem 2rem 0.2rem 2rem;
  background: transparent;
  border: 0.1rem solid #ffc14266;
  color: #ffc142ff;
  border-radius: 0.4rem;

  &:hover {
    background: #ffc14244;
    cursor: pointer;
  }
`;

const TotalPriceContainer = styled.div`
  display: flex;
  top: 17%;
  right: min(10%, 50%);
  position: fixed;
  padding: 1rem;
  justify-content: space-between;
  flex-direction: column;
  height: fit-content;
  width: 20%;
  color: black;
  border-radius: 1rem;
  background: #ffc142ff;
  border: 0.4rem solid #00000055;
`;

const TotalPriceContainerDummy = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 35%;
`;

const ItemPriceContainer = styled.div`
  display: flex;
  font-weight: lighter;
  padding: 0.5rem 0;
  width: 100%;
  justify-content: space-between;
`;

const BtnBuyNow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 0.1rem solid #595959;
  background: #0c0c0c;
  color: #ffffff;
  height: 3rem;
  width: 100%;
  backdrop-filter: blur(2rem);
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem 0 #30303044;

  &:hover {
    transition: 200ms ease-in-out;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 0.6rem 0 #ffc14266;
    color: black;
    cursor: pointer;
  }
`;

const Cart = () => {
  const CartData = useSelector((state) => state.phoneApiData.cartInfo);
  console.log(CartData);

  const dispatch = useDispatch();
  function totalPrice() {
    const price = CartData.map((li) => {
      return li.price.inr * li.quantity;
    });

    console.log("price", price);

    return price.reduce((a, b) => {
      return a + b;
    });
  }

  function addQuantity(item) {
    dispatch(addCartInfo(item));
  }

  function subQuantity(item) {
    dispatch(decQuantity(item));
  }

  function removeItem(item) {
    dispatch(removeCartItem(item));
  }

  function buyNow() {}

  return CartData && CartData.length > 0 ? (
    <>
      <Navbar />
      <MainContainer>
        <CartListContainer>
          <div
            style={{
              fontSize: "2.4rem",
              fontWeight: "lighter",
              textAlign: "center",
              margin: "1rem",
            }}
          >
            Cart
          </div>
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
                          <b style={{ color: "#a6a6a6" }}>
                            •&emsp;Display Size
                          </b>
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
                          <b style={{ color: "#a6a6a6" }}>
                            •&emsp;Release Year
                          </b>
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
                    <div
                      style={{
                        fontSize: "0.6rem",
                        padding: "0 0.8rem",
                      }}
                    >
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
        <TotalPriceContainerDummy />
        <TotalPriceContainer>
          <div>
            {CartData.map((item) => {
              return (
                <ItemPriceContainer key={item.id}>
                  <div style={{ marginRight: "3rem" }}>
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
              marginTop: "4rem",
              marginBottom: "1rem",
            }}
          >
            <div>Total</div>
            <div>₹{totalPrice()}</div>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to={"/order"}>
              <BtnBuyNow onClick={() => buyNow()}>
                <ShoppingCartOutlined></ShoppingCartOutlined>
                <div>Buy Now</div>
              </BtnBuyNow>
            </Link>
          </div>
        </TotalPriceContainer>
      </MainContainer>
    </>
  ) : (
    <CartEmpty />
  );
};

export default Cart;
