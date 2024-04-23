import { useState } from "react";
import "./App.css";

function App() {
  const [buttonStates, setButtonStates] = useState({
    button1: "white",
    button2: "white",
    button3: "white",
    button4: "white",
  });

  const handleClick = (buttonName) => {
    const updatedButtonStates = {
      button1: buttonName === "button1" ? "black" : "red",
      button2: buttonName === "button2" ? "black" : "red",
      button3: buttonName === "button3" ? "black" : "red",
      button4: buttonName === "button4" ? "black" : "red",
    };
    setButtonStates(updatedButtonStates);
  };

  return (
    <div className="button-container">
      <button
        className={"button"}
        style={{ backgroundColor: buttonStates.button1 }}
        onClick={() => handleClick("button1")}
      ></button>
      <button
        className={"button"}
        style={{ backgroundColor: buttonStates.button2 }}
        onClick={() => handleClick("button2")}
      ></button>
      <button
        className={"button"}
        style={{ backgroundColor: buttonStates.button3 }}
        onClick={() => handleClick("button3")}
      ></button>
      <button
        className={"button"}
        style={{ backgroundColor: buttonStates.button4 }}
        onClick={() => handleClick("button4")}
      ></button>
    </div>
  );
}

export default App;
