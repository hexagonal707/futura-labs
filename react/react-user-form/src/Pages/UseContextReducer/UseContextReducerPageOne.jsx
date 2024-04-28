import { useContext } from "react";
import { UserContext } from "./Context.jsx";
import { Link } from "react-router-dom";

const UseContextReducerPageOne = () => {
  const { dispatch } = useContext(UserContext);

  function display() {
    dispatch({ status: "success", datas: { name: "calvin" } });
  }

  return (
    <div>
      <button onClick={display}>Click me</button>
      <Link to={"/usecontextreducerpagetwo"}>
        <button>Page two</button>
      </Link>
    </div>
  );
};

export default UseContextReducerPageOne;
