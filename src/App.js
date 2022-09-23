import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Card from "./components/Card/Card";
import NavBar from "./components/Navigation/Nav";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="/about" element={<>about</>} />
        <Route path="/cart" element={<>cart</>} />
      </Routes>
    </>
  );
}

export default App;
