import "./App.css";
import Home from "../src/pages/Home";
import { Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage.jsx";
import Dashboard from "./pages/Dashboard";
import CardBoard from "./pages/SwipePage";
import Wrapper from "./pages/SwipePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        

      </Routes>
    </div>
  );
}

export default App;
