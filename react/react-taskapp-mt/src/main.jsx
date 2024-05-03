import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
