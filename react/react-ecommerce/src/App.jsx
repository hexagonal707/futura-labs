import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import { createContext } from "react";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import ItemDetail from "./Pages/ItemDetail/ItemDetail.jsx";
import OrderPlaced from "./components/OrderPlaced.jsx";

const AppContext = createContext();

function App() {
  const pageRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/order",
      element: <OrderPlaced />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/itemdetail/:id",
      element: <ItemDetail />,
    },
  ]);

  return (
    <AppContext.Provider value={""}>
      <RouterProvider router={pageRouter} />
    </AppContext.Provider>
  );
}

export default App;
