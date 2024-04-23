import { styled } from "styled-components";
import { useReducer, useState } from "react";

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

const Counter = styled.div`
  font-size: 10rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 0.5rem #1f1f1f44;
`;

const BtnIncrement = styled.button`
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

const BtnDecrement = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #ff00004c; /* Red border color */
  border-radius: 2rem;
  padding: 0.8rem 2rem;
  text-align: center;
  background: #ff000016; /* Red background color */
  color: #ff0000; /* Red text color */
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #ff000030; /* Red background color on hover */
    border: 0.1rem solid #ff00005a; /* Red border color on hover */
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const BtnReset = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #ffff004c; /* Yellow border color */
  border-radius: 2rem;
  padding: 0.5rem;
  text-align: center;
  background: #ffff0016; /* Yellow background color */
  color: #ffff00; /* Yellow text color */
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #ffff0030; /* Yellow background color on hover */
    border: 0.1rem solid #ffff005a; /* Yellow border color on hover */
    transition: 200ms ease-in-out;
    text-decoration: none;
    cursor: pointer;
  }
`;

const UseReducer = () => {
  const [countColor, setCountColor] = useState("white");

  console.log("child rendered");

  const reducer = (state, action) => {
    if (action.type === "increment") {
      setCountColor(action.color);
      return state + 1;
    } else if (action.type === "decrement") {
      setCountColor(action.color);
      return state !== 0 ? state - 1 : 0;
    } else {
      setCountColor(action.color);
      return 0;
    }
  };

  const initialValue = 0;

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="hello">
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
          <Heading>useReducer Counter Example</Heading>

          <Counter style={{ color: countColor }}>{state}</Counter>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <BtnIncrement
              onClick={() =>
                dispatch({
                  type: "increment",
                  color: "#8AFFC8FF",
                })
              }
            >
              Increment
            </BtnIncrement>
            <BtnDecrement
              onClick={() =>
                dispatch({
                  type: "decrement",
                  color: "#FF8A8AFF",
                })
              }
            >
              Decrement
            </BtnDecrement>
          </div>
          <BtnReset
            onClick={() =>
              dispatch({
                type: "reset",
                color: "#fffea9",
              })
            }
          >
            Reset
          </BtnReset>
        </FormContainer>
      </MainContainer>
    </div>
  );
};

export default UseReducer;
