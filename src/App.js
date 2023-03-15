import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habits from "./pages/Habits/Habits";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/habitos" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}
