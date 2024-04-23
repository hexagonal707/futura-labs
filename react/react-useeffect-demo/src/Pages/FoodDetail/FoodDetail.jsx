import { useNavigate, useParams } from "react-router-dom";
import { display, displayFilteredData } from "../api.js";
import { useEffect, useState } from "react";

const FoodDetail = () => {
  const [state, setState] = useState([]);

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    display().then((data) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    displayFilteredData(params.id).then((data) => {
      console.log(data);
      setState(data);
    });
  }, []);

  const arr = [45, 54, 46, 23, 32, 64, 12];

  const data = arr.sort((n1, n2) => n2 - n1);

  // const a = arr.filter((li) => {
  //   return li == 32;
  // });
  console.log("##########################", data);

  return (
    <div>
      {state &&
        state.map((li) => (
          <div key={li.idCategory}>
            <h1>{li.strCategory}</h1>
            <img src={li.strCategoryThumb} />
            <p>{li.strCategoryDescription}</p>
          </div>
        ))}
    </div>
  );
};

export default FoodDetail;
