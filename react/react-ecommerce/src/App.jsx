import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import { createContext } from "react";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

const AppContext = createContext();

function App() {
  const pageRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/",
      element: <Contact />,
    },
  ]);

  return (
      <AppContext.Provider value={""}>

        <RouterProvider router={pageRouter} />

      </AppContext.Provider>
  );
}


export default App;
