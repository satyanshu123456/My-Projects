import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home"
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
