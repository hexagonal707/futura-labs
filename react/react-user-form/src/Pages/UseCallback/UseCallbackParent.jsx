import React, { useCallback, useState } from "react"; // import UseCallbackChild from "./UseCallbackChild.jsx";
import { ReactUseCallbackChild } from "./UseCallbackChild.jsx";
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

const FormHeading = styled.div`
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
const CounterHeading = styled.div`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const Counter = styled.div`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const BtnParent = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #ff7f004c;
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-align: center;
  background: #ff7f0016;
  color: #ff7f00;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #ff7f0030;
    border: 0.1rem solid #ff7f005a;
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const BtnChild = styled.button`
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

const UseCallbackParent = () => {
  const [stateButton1, setStateButton1] = useState(0);
  const [stateButton2, setStateButton2] = useState(0);
  console.log("Parent Rendered");

  function hello() {
    console.log("I'm using UseCallback function");
  }

  const Memoizedfunction = useCallback(hello, [stateButton2]);

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
          <FormHeading>useCallback Counter Example</FormHeading>
          <CounterHeading>Parent</CounterHeading>
          <Counter>{stateButton1}</Counter>
          <BtnParent onClick={() => setStateButton1(stateButton1 + 1)}>
            Parent Button
          </BtnParent>
          <CounterHeading>Child</CounterHeading>
          <Counter>{stateButton2}</Counter>
          <BtnChild onClick={() => setStateButton2(stateButton2 + 1)}>
            Child Button
          </BtnChild>
          <ReactUseCallbackChild value={Memoizedfunction} />
        </FormContainer>
      </MainContainer>
    </div>

    /*<div>
                                                  <h1>Parent: {stateButton1}</h1>
                                                  <button onClick={() => setStateButton1(stateButton1 + 1)}>
                                                    Button 1
                                                  </button>
                                                  <h1>Child: {stateButton2}</h1>
                                                  <button onClick={() => setStateButton2(stateButton2 + 1)}>
                                                    Button 2
                                                  </button>
                                                  <ReactUseCallbackChild value={Memoizedfunction} />
                                                </div>*/
  );
};

export default UseCallbackParent;
