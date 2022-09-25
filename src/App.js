import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Card from "./components/Card/Card";
import NavBar from "./components/Navigation/Nav";
import HomePage from "./pages/HomePAge/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<>products</>} />
        <Route path="/about" element={<>about</>} />
        <Route path="/cart" element={<>cart</>} />
      </Routes>
    </>
  );
}

export default App;
