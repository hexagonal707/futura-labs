import { useContext } from "react";
import { UserContext } from "./Context.jsx";

const UseContextReducerPageTwo = () => {
  const { User, dispatch } = useContext(UserContext);

  function removeData() {
    dispatch({ status: "remove" });
  }

  console.log("///////////////", User);
  return (
    <div>
      <h1>{User && User.name}</h1>
      <button onClick={removeData}>Remove Data</button>
    </div>
  );
};

export default UseContextReducerPageTwo;
