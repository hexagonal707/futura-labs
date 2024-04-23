import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFullInfo } from "../../Redux/apiSlice.js";
import { Link } from "react-router-dom";

const ReduxPageOne = () => {
  const [state, setState] = useState([]);

  const dispatch = useDispatch();

  async function display() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data.data);
    setState(data.data);
    dispatch(addFullInfo(data.data));
  }

  return (
    <div>
      <button onClick={() => display()}>Click</button>
      <Link to={"/reduxpagetwo"}>Page two</Link>
    </div>
  );
};

export default ReduxPageOne;
