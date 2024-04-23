import { useState } from "react";
import { ReactMemos } from "./ReactMemoChild.jsx";

const ReactMemo = (callback, deps) => {
  const [state, setState] = useState(0);
  const [stateButton2, setStateButton2] = useState(0);
  console.log("parentrendered");

  function display() {
    console.log("Calvin");
  }

  return (
    <>
      <div>
        <h1>Parent: {state}</h1>
        <button onClick={() => setState(state + 1)}>button 1</button>
        <button onClick={() => setStateButton2(stateButton2 + 1)}>
          Button 2
        </button>
        <ReactMemos displayData={display} stateData={stateButton2}></ReactMemos>
      </div>
    </>
  );
};

export default ReactMemo;
