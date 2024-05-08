import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchPhoneApi } from "../api.js";
import { Link } from "react-router-dom";

const MainBox = styled.div`
  display: grid;
  height: 25rem;
  grid-gap: 2rem;
  color: #e6e6e6;
  padding: 2rem;
  grid-template-columns: 1fr 3fr 1fr;
  border-radius: 1rem;
  outline: 0.1rem solid #ffffff11;
  background-color: #04040488;
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
  background: #1c1c1c;
  outline: 0.1rem solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 1rem 0 #ffffff22;
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
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

const ContentBox = () => {
  const [phoneApiDataState, setPhoneApiDataState] = useState([]);

  useEffect(() => {
    fetchPhoneApi().then((result) => {
      return setPhoneApiDataState(result.data);
    });
  }, []);

  console.log(phoneApiDataState);

  return phoneApiDataState
    ? phoneApiDataState.map((li) => {
        return (
          <MainBox key={li.id}>
            <PlaceHolderContainer>
              <PlaceHolderImage src={li.img} alt="" />
            </PlaceHolderContainer>

            <PhoneDetailContainer>
              <div>
                <PhoneNameHeading>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`/itemdetail/${li.id}`}
                  >{`${li.brand} ${li.model}`}</Link>
                </PhoneNameHeading>
                <SpecsContainer>
                  <Specs>
                    <span>
                      <b>Display Size</b>
                    </span>{" "}
                    <span>{li.display_size_inches} inches</span>
                  </Specs>

                  <Specs>
                    <span>
                      <b>RAM</b>
                    </span>{" "}
                    <span>{li.ram_gb} GB</span>
                  </Specs>
                  <Specs>
                    <span>
                      <b>Storage</b>
                    </span>{" "}
                    <span>{li.storage_gb} GB</span>
                  </Specs>
                  <Specs>
                    <span>
                      <b>Release Year</b>
                    </span>{" "}
                    <span>{li.release_year}</span>
                  </Specs>
                </SpecsContainer>
              </div>
            </PhoneDetailContainer>
            <PriceHeading>
              <div>
                <div style={{ margin: "1rem 0" }}> {li.star_rating}</div>
                <div>${li.price_usd}&nbsp;</div>
              </div>
              <div>{/*<BtnAddToCart>Add to Cart</BtnAddToCart>*/}</div>
            </PriceHeading>
          </MainBox>
        );
      })
    : null;
};

export default ContentBox;
