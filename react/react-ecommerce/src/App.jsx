import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Layout from "./Pages/Layout.jsx";
import About from "./Pages/About/About.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import ItemDetail from "./Pages/ItemDetail/ItemDetail.jsx";
import OrderPlaced from "./Components/OrderPlaced.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  const pageRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route path={"/itemdetail/:id"} element={<ItemDetail />}></Route>
        <Route path={"/order"} element={<OrderPlaced />}></Route>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Route>,
    ),
  );

  return <RouterProvider router={pageRouter} />;
}

export default App;
