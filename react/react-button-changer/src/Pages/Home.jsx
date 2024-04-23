import { useState } from "react";
import "../App.css";

const Home = () => {
  const [btnColState, setBtnColState] = useState("black");
  const [btnTextState, setBtnTextState] = useState("white");
  const [btnBorderState, setBtnBorderState] = useState("solid 0.12rem black");

  function toggleBgState() {
    setBtnColState("lightgreen");
    setBtnTextState("#003400FF");
    setBtnBorderState("1rem solid lightgreen;");
  }

  return (
    <>
      <div className={"home-container"}>
        <button
          className={"col-chg-btn"}
          onClick={toggleBgState}
          style={{
            background: btnColState,
            color: btnTextState,
            borderRadius: "0.5rem 0 0 0.5rem",
            border: btnBorderState,
          }}
        >
          Click
        </button>
        <button
          className={"col-chg-btn"}
          onClick={toggleBgState}
          style={{
            background: btnColState,
            color: btnTextState,
          }}
        >
          Click
        </button>
        <button
          className={"col-chg-btn"}
          onClick={toggleBgState}
          style={{
            background: btnColState,
            color: btnTextState,
          }}
        >
          Click
        </button>
        <button
          className={"col-chg-btn"}
          onClick={toggleBgState}
          style={{
            background: btnColState,
            color: btnTextState,
            borderRadius: " 0 0.5rem 0.5rem 0",
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default Home;
