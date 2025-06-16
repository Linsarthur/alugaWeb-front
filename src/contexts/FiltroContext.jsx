import { createContext, useState } from "react";

export const FiltroContext = createContext();

export const FiltroProvider = ({ children }) => {
  const [tipoNegocio, setTipoNegocio] = useState(""); 

  return (
    <FiltroContext.Provider value={{ tipoNegocio, setTipoNegocio }}>
      {children}
    </FiltroContext.Provider>
  );
};
