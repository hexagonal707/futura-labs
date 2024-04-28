import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import { createContext } from "react";
import UseReducer from "./Pages/UseReducer/UseReducer.jsx";
import UseMemo from "./Pages/UseMemo/UseMemo.jsx";
import ReactMemoParent from "./Pages/ReactMemo/ReactMemoParent.jsx";
import Home from "./Pages/Home/Home.jsx";
import UseCallbackParent from "./Pages/UseCallback/UseCallbackParent.jsx";
import ReduxPageOne from "./Pages/Redux/ReduxPageOne.jsx";
import ReduxPageTwo from "./Pages/Redux/ReduxPageTwo.jsx";
import ReactQuery from "./Pages/ReactQuery/ReactQuery.jsx";
import UseContextReducerPageOne from "./Pages/UseContextReducer/UseContextReducerPageOne.jsx";
import UseContextReducerPageTwo from "./Pages/UseContextReducer/UseContextReducerPageTwo.jsx";

const AppContext = createContext();

function App() {
  const pageRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/usereducer",
      element: <UseReducer />,
    },

    {
      path: "/usememo",
      element: <UseMemo />,
    },

    {
      path: "/reactmemo",
      element: <ReactMemoParent />,
    },

    {
      path: "/usecallback",
      element: <UseCallbackParent />,
    },
    {
      path: "/redux",
      element: <ReduxPageOne />,
    },
    {
      path: "/reduxpagetwo",
      element: <ReduxPageTwo />,
    },
    {
      path: "/reactQuery",
      element: <ReactQuery />,
    },
    {
      path: "/usecontextreducerpageone",
      element: <UseContextReducerPageOne />,
    },
    {
      path: "/usecontextreducerpagetwo",
      element: <UseContextReducerPageTwo />,
    },
  ]);

  return <RouterProvider router={pageRouter} />;
}

export default App;
