import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./pages/Login/SingUp";
import Register from "./pages/Login/Register";
import Habits from "./pages/Habits/Habits";
import Today from "./pages/Today/Today"
import Historic from "./pages/Historic/Historic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}
