import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchPhoneApi } from "../api.js";
import { Link } from "react-router-dom";

const MainBox = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2rem;
  padding: 2rem;
  grid-template-columns: 1fr 3fr 1fr;
  border-radius: 1rem;
  /*outline: 0.1rem solid rgba(46, 46, 46, 0.27);*/
  background-color: rgba(255, 255, 255, 0.53);
`;

const PlaceHolderContainer = styled.div`
  display: flex;
  width: min-content;
  position: relative;
  /*background-color: rgba(205, 28, 28, 0.88);*/
`;

const PlaceHolderImage = styled.img`
  display: block;
  height: auto;
  width: 10rem;
  position: relative;
`;

const PhoneDetailContainer = styled.div`
  display: flex;
  width: 100%;
  /*background-color: #82b815;*/
`;
const PriceHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const PhoneNameHeading = styled.div`
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
  background: #e4e4e4;
  outline: 0.1rem solid #bababa;
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

  return phoneApiDataState && phoneApiDataState
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
                      color: "black",
                    }}
                    to={`/itemdetail/${li.brand}/${li.model}`}
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
              <div> {li.star_rating}</div>${li.price_usd}
            </PriceHeading>
          </MainBox>
        );
      })
    : null;
};

export default ContentBox;
