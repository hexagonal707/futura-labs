import { useEffect, useState } from "react";

const UseEff = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    var i = 0;
    const interval = setInterval(() => {
      console.log(i++);
    }, 2000);

    return () => {
      console.log("cleanup function");
      clearInterval(interval);
    };
  }, [state]);

  return (
    <>
      <h1 style={{ color: "white" }}>{state}</h1>
      <button onClick={() => setState(state + 1)}>Onclick</button>
    </>
  );
};

export default UseEff;
