import axios from "axios";
import { useState } from "react";

const ReduxPageOne = () => {
  const [state, setState] = useState([]);

  async function display() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data.data);
    setState(data.data);
  }

  return (
    <div>
      <button onClick={() => display()}>Click</button>
    </div>
  );
};

export default ReduxPageOne;
