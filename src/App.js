import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habits from "./pages/Habits/Habits";
import Historic from "./pages/Historic/Historic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}
