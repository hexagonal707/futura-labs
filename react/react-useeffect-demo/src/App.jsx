import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import FoodDetail from "./Pages/FoodDetail/FoodDetail.jsx";

function App() {
  const pageRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/foodName/:id",
      element: <FoodDetail />,
    },
  ]);

  return <RouterProvider router={pageRouter} />;
}

export default App;
