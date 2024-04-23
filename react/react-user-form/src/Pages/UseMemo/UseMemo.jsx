import { useEffect, useMemo, useState } from "react";

import { styled } from "styled-components";

//Styled Components
const MainContainer = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
`;

const BackgroundPattern = styled.div`
  position: fixed;
  top: 25%;
  font-weight: bolder;
  text-align: center;
  color: #2f2f2fcc;
  font-size: 3rem;
  z-index: 0;
  scale: 500%;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: lighter;
  color: #ffffff;
  z-index: 0;
`;

const FormContainer = styled.div`
  border-radius: 2rem;
  outline: solid 0.1rem #c9c9c944;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  height: max-content;
  backdrop-filter: blur(1.3rem);
`;
const OddEvenCounter = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const DelayedCounter = styled.div`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const NormalCounter = styled.div`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const BtnDelayed = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #ff7f004c; /* Orange border color */
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-align: center;
  background: #ff7f0016; /* Light orange background */
  color: #ff7f00; /* Orange text color */
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #ff7f0030; /* Darker orange on hover */
    border: 0.1rem solid #ff7f005a; /* Darker border on hover */
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const BtnNormal = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #00ff8c4c;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-align: center;
  background: #00ff8c16;
  color: #00ff8c;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #00ff8c30;
    border: 0.1rem solid #00ff8c5a;
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const UseMemo = () => {
  const [buttonOne, setButtonOne] = useState(0);
  const [buttonTwo, setButtonTwo] = useState(0);

  const delayedState = useMemo(() => {
    for (let i = 1; i <= 2000000000; i++) {
      /* /!* empty *!/*/
    }
    return buttonOne % 2 === 0;
  }, [buttonOne]);

  const normalState = useMemo(() => {
    return buttonTwo % 2 === 0;
  }, [buttonTwo]);

  useEffect(() => {
    console.log("hi, hello");
  }, [buttonOne]);

  return (
    <div>
      <MainContainer>
        <BackgroundPattern>
          <p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              atque commodi ipsa, labore nesciunt possimus rem? Accusamus animi,
              asperiores beatae enim eos fugiat iste minus molestias nesciunt
              quaerat quo saepe?
            </span>
          </p>
        </BackgroundPattern>

        <FormContainer>
          <Heading>useMemo Counter Example</Heading>

          <OddEvenCounter>{delayedState ? "Even" : "Odd"}</OddEvenCounter>
          <DelayedCounter>{buttonOne}</DelayedCounter>
          <BtnDelayed onClick={() => setButtonOne(buttonOne + 1)}>
            Delayed Button
          </BtnDelayed>
          <OddEvenCounter>{normalState ? "Even" : "Odd"}</OddEvenCounter>
          <NormalCounter>{buttonTwo}</NormalCounter>
          <BtnNormal onClick={() => setButtonTwo(buttonTwo + 1)}>
            Normal Button
          </BtnNormal>
        </FormContainer>
      </MainContainer>
    </div>
  );
};

export default UseMemo;
