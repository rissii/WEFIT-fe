import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AppContext = React.createContext();

const AppProvider = ({ children }) => {

const user = localStorage.getItem("user");
debugger
  const [isUser, setisUser] = useState(user ? JSON.parse(user) : null);

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
  });

  const addUserToLocalStorage = ( user ) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const registerUser = async (currentUser ) => {
    console.log(currentUser);
    const response = await api.post("/auth/signup", currentUser);

//     const { user } = response.data;
   

// addUserToLocalStorage(
//     user
// );

    navigate("/form");
  };

  const loginUser = async (currentUser) => {
    console.log(currentUser);

    const response = await api.post("/auth/login", currentUser);

    const user  = response.data.data;
   

    addUserToLocalStorage( user );
    setTimeout(() => {
      navigate("/form");
    }, 3000);
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
