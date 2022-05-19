import "./App.css";
import Home from "../src/pages/Home";
import { Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
