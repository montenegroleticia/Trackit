import { useState, createContext } from "react";

export const ImageContext = createContext();

export const Token = createContext({});

export const Percentege = createContext();

export const PercentegeProvider = ({ children }) => {
    const [percentege, setPercentege] = useState(0);
    return (
      <Percentege.Provider value={{ percentege, setPercentege }}>
        {children}
      </Percentege.Provider>
    );
  };