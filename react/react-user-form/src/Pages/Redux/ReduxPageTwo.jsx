import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../../Redux/apiSlice.js";

const ReduxPageTwo = () => {
  const ApiData = useSelector((state) => state.apiData.fullInfo[0]);

  const removeDataDispatch = useDispatch();

  function display() {
    removeDataDispatch(removeData());
  }

  console.log(ApiData, "***************");
  return (
    <div>
      <h1>Redux Page 2</h1>
      {ApiData && ApiData.map((li) => <h2 key={li.id}>{li.name}</h2>)}

      <button onClick={display}>Remove Data</button>
    </div>
  );
};

export default ReduxPageTwo;
