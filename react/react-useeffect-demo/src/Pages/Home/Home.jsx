import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { display } from "../api.js";

const Home = () => {
  const [foodList, setFoodList] = useState([]);
  console.log(`Home page ${foodList[0]}`);

  useEffect(() => {
    display().then((foodListObj) => {
      setFoodList(foodListObj);
    });
  }, []);

  function remove() {
    setFoodList([]);
  }

  return (
    <>
      <div className="main-container">
        <div className="food-list-container">
          {foodList.map((data) => (
            <Link to={`/foodName/${data.idCategory}`} key={data.idCategory}>
              <div>
                <img
                  className="image-container"
                  src={data.strCategoryThumb}
                  alt="image"
                />
                <h1>{data.strCategory.toUpperCase()}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <button className="btn-remove" onClick={remove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
