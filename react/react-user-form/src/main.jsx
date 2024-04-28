import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
/*import store from "./Redux/store.js";*/
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/store.js";
import { UserInfoContextProvider } from "./Pages/UseContextReducer/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <UserInfoContextProvider>
        <App />
      </UserInfoContextProvider>
    </PersistGate>
  </Provider>,
);
