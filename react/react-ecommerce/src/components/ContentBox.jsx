import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchPhoneApi } from "../api.js";

const MainBox = styled.div`
  display: flex;
  height: 20rem;
  width: 100%;
  gap: 3rem;
  background-color: #d12121;
`;

const PlaceHolder = styled.div`
  margin: 2rem 0 0 2rem;
  height: 15rem;
  width: 9rem;
  border-radius: 1rem;
  background: orangered;
`;

const PhoneDetailContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem 2rem 2rem 0;
  background-color: #82b815;
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
            <PlaceHolder></PlaceHolder>

            <PhoneDetailContainer>
              <h3>{`${li.brand} ${li.model}`}</h3>
            </PhoneDetailContainer>
          </MainBox>
        );
      })
    : null;
};

export default ContentBox;
