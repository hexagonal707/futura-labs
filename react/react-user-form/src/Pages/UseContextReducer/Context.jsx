import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  User: JSON.parse(localStorage.getItem("abc")) || null,
};

export const UserContext = createContext(INITIAL_STATE);

const UserReducer = (state, action) => {
  console.log("action value", action);
  switch (action.status) {
    case "success":
      return { User: action.datas };

    case "remove":
      return { User: null };

    default:
      return state;
  }
};

export const UserInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("abc", JSON.stringify(state.User));
  }, [state.User]);

  return (
    <UserContext.Provider value={{ User: state.User, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
