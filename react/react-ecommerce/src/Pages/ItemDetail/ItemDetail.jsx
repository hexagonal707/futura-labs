import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPhoneDetail } from "../../api.js";
import { useDispatch } from "react-redux";
import { addCartInfo } from "../../Redux/phoneApiSlice.js";
import Navbar from "../../components/Navbar.jsx";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 8rem 3rem 0 3rem;
  height: max(100%);
  width: 100%;
  background-color: #171717;
  color: white;
`;

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

const PhoneLayoutContainer = styled.div`
  padding: 2rem min(10vw, 15rem);
  height: 100%;
  display: grid;
  grid-gap: 2rem;
  color: #e6e6e6;
  grid-template-columns: 1fr 3fr 1fr;
  border-radius: 1rem 1rem 0 0;
  /*outline: 0.1rem solid #ffffff11;*/
  background-color: #0c0c0c;
  /*box-shadow: 0 0 1rem 0 #ffffff22;*/
`;

const PlaceHolderContainer = styled.div`
  display: block;
  height: auto;
  align-content: center;
  width: min-content;
  position: relative;
`;

const PlaceHolderImage = styled.img`
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
  /*background: #1c1c1c;
    outline: 0.1rem solid rgba(255, 255, 255, 0.3);*/
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PhoneDescriptionContainer = styled.div`
  grid-column: 1/-1;
  grid-row: 2/2;
  height: fit-content;
  text-align: justify;
`;

const ItemDetail = () => {
  const itemId = useParams();
  console.log(itemId.id, "itemId");
  const dispatch = useDispatch();

  const [apiDataState, setApiDataState] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchPhoneDetail(itemId.id).then((item) => {
      setApiDataState(item);
    });
  }, [itemId.id]);

  if (!apiDataState.price) {
    return <></>;
  }

  async function addToCart() {
    apiDataState.quantity = apiDataState.quantity + 1;
    console.log("*************", apiDataState);
    dispatch(addCartInfo(apiDataState));

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  console.log(apiDataState, "apiDataState");
  return apiDataState && apiDataState ? (
    <MainContainer>
      <Navbar />
      <PhoneLayoutContainer>
        <PlaceHolderContainer>
          <PlaceHolderImage src={apiDataState.img} alt="" />
        </PlaceHolderContainer>
        <PhoneDetailContainer>
          <div>
            <PhoneNameHeading>
              {`${apiDataState.brand} ${apiDataState.model}`}
            </PhoneNameHeading>
            <SpecsContainer>
              <Specs>
                <span>
                  <b style={{ color: "#a6a6a6" }}>•&emsp;Display Size</b>
                </span>{" "}
                <span>{apiDataState.display_size_inches} inches</span>
              </Specs>

              <Specs>
                <span>
                  <b style={{ color: "#a6a6a6" }}>•&emsp;RAM</b>
                </span>{" "}
                <span>{apiDataState.ram_gb} GB</span>
              </Specs>
              <Specs>
                <span>
                  <b style={{ color: "#a6a6a6" }}>•&emsp;Storage</b>
                </span>{" "}
                <span>{apiDataState.storage_gb} GB</span>
              </Specs>
              <Specs>
                <span>
                  <b style={{ color: "#a6a6a6" }}>•&emsp;Release Year</b>
                </span>{" "}
                <span>{apiDataState.release_year}</span>
              </Specs>
            </SpecsContainer>
          </div>
        </PhoneDetailContainer>
        <PriceHeading>
          <div>
            <div style={{ margin: "1rem 0" }}> {apiDataState.star_rating}</div>
            <div>₹{apiDataState.price.inr}&nbsp;</div>
          </div>
          <div>
            <BtnAddToCart onClick={() => addToCart()}>Add to Cart</BtnAddToCart>
          </div>
        </PriceHeading>
        <PhoneDescriptionContainer>
          <p style={{ fontSize: "1rem", letterSpacing: "0.1rem" }}>
            {apiDataState.description}
          </p>
        </PhoneDescriptionContainer>
      </PhoneLayoutContainer>
      {showAlert && (
        <Alert
          style={{
            position: "fixed",
            right: "5%",
            bottom: "5%",
          }}
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
        >
          {apiDataState.quantity > 1 ? (
            <span>Item added to cart({apiDataState.quantity}).</span>
          ) : (
            <span>Item added to cart.</span>
          )}
        </Alert>
      )}
    </MainContainer>
  ) : null;
};

export default ItemDetail;
