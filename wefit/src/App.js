import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/Home'
import Questionary from './pages/Questionary';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home.jsx";
import FormPage from "./pages/FormPage.jsx";
import "../src/components/Form.css";

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
