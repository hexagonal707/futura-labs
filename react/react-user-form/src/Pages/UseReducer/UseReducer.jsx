import { useReducer, useState } from "react";

const UseReducer = () => {
  const [color, setColor] = useState();
  const initialValue = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return (state = state + 1);

      case "dec":
        return (state = state - 1);

      case "reset":
        return (state = initialValue);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>{state}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "inc",
            color: "green",
          })
        }
      >
        Inc
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "dec",
            color: "red",
          })
        }
      >
        Dec
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
            color: "yellow",
          })
        }
      >
        Reset
      </button>
    </>
  );
};

export default UseReducer;
