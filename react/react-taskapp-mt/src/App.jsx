import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";

function App() {
  const pageRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={pageRouter} />;
}

export default App;
