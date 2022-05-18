import React from "react";
import './App.css'
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppProvider } from './context/appContext';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
    </React.StrictMode>
  </BrowserRouter>
);
