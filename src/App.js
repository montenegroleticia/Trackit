import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUp from "./pages/Login/SingUp";
import Register from "./pages/Login/Register";
import Habits from "./pages/Habits/Habits";
import Today from "./pages/Today/Today";
import Historic from "./pages/Historic/Historic";
import ImageContext from "./Hook/context";
import { useState } from "react";

export default function App() {
  const [profilerPic, setProfilerPic] = useState(null);
  const [token, setToken] = useState();

  return (
    <ImageContext.Provider value={{ profilerPic, setProfilerPic }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingUp setToken={setToken} />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits token={token} />} />
          <Route path="/hoje" element={<Today token={token} />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </ImageContext.Provider>
  );
}
