import { createContext, useState } from "react";

export const FiltroContext = createContext();

export const FiltroProvider = ({ children }) => {
  const [tipoNegocio, setTipoNegocio] = useState("venda");
  const [localizacao, setLocalizacao] = useState("");
  const [tipoImovel, setTipoImovel] = useState("");
  const [precoMin, setPrecoMin] = useState(null);
  const [precoMax, setPrecoMax] = useState(null);
  const [quartos, setQuartos] = useState(null);
  const [banheiros, setBanheiros] = useState(null);
  const [garagens, setGaragens] = useState(null);

  return (
    <FiltroContext.Provider
      value={{
        tipoNegocio,
        setTipoNegocio,
        localizacao,
        setLocalizacao,
        tipoImovel,
        setTipoImovel,
        precoMin,
        setPrecoMin,
        precoMax,
        setPrecoMax,
        quartos,
        setQuartos,
        banheiros,
        setBanheiros,
        garagens,
        setGaragens,
      }}
    >
      {children}
    </FiltroContext.Provider>
  );
};
