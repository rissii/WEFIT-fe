import React, { useContext, useState } from "react";
import server from "../services/server";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const [isUser, setisUser] = useState(user ? JSON.parse(user) : null);
  const navigate = useNavigate();
  const addUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const registerUser = async (currentUser) => {
    const response = await server.signup(currentUser);

    if (response.status === "ok") {
      navigate("/");
    }
    //     const { user } = response.data;

    // addUserToLocalStorage(
    //     user
    // );
  };

  const loginUser = async (currentUser) => {
    const response = await server.login(currentUser);
    if (response.status === "ok") {
      addUserToLocalStorage(response.data);
      navigate("/form");
    }
  };

  return (
    <AppContext.Provider value={{ registerUser, loginUser, isUser, setisUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
