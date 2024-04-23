import React from "react";
import { styled } from "styled-components";

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

const ReactMemoChild = ({ displayData, stateData }) => {
  console.log("child rendered");

  displayData();
  return (
    <>
      <div>
        <CounterHeading>Child</CounterHeading>
        <Counter>{stateData}</Counter>
      </div>
    </>
  );
};

export const ReactMemos = React.memo(ReactMemoChild);
