import { useState } from "react";

const Sample = () => {
  const [state, setState] = useState(1);

  function inc() {
    setState(state + 2);
  }

  function dec() {
    state > 1 ? setState(state - 2) : setState(0);
  }

  return (
    <>
      <div>
        <h1>{state}</h1>
      </div>

      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
    </>
  );
};

export default Sample;
