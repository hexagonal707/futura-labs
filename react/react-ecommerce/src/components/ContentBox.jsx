import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchPhoneApi } from "../api.js";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: grid;
  height: 25rem;
  grid-gap: 2rem;
  color: #e6e6e6;
  padding: 2rem;
  grid-template-columns: 1fr 3fr 1fr;
  border-radius: 0.4rem;
  border: 0.1rem solid #ffc14266;
  background-color: #04040488;

  &:hover {
    background-color: #ffc1421e;
    transition: 150ms ease-in-out;
  }
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
  /*background: #1c1c1c;
  outline: 0.1rem solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 1rem 0 #ffffff22;*/
`;

const Specs = styled.div`
  display: flex;
  justify-content: space-between;
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
          <Link
            key={li.id}
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={`/itemdetail/${li.id}`}
          >
            <MainContainer key={li.id}>
              <PlaceHolderContainer>
                <PlaceHolderImage src={li.img} alt="" />
              </PlaceHolderContainer>

              <PhoneDetailContainer>
                <div>
                  <PhoneNameHeading>
                    {`${li.brand} ${li.model}`}
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
                  <div style={{ margin: "1rem 0" }}>{li.star_rating}</div>
                  <div>₹{li.price.inr}&nbsp;</div>
                </div>
              </PriceHeading>
            </MainContainer>
          </Link>
        );
      })
    : null;
};

export default ContentBox;
