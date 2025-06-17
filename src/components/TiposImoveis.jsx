import { useContext } from "react";
import { FiltroContext } from "../contexts/FiltroContext";

const TiposImoveis = () => {
  const { tipoImovel, setTipoImovel } = useContext(FiltroContext);

const selecionarTipo = (tipo) => {
  const tipoNormalizado = tipo.trim().toLowerCase();
  setTipoImovel(tipoImovel === tipoNormalizado ? "" : tipoNormalizado);
};


  return (
    <div className="p-[34px] border border-[#00000026] w-[370px]">
      <label className="text-[#595959] font-bold mt-[15px] mb-[15px] block">
        Tipos de imóveis
      </label>
      <div className="flex gap-5 pt-[14px]">
        <div
          onClick={() => selecionarTipo("casa")}
          className={`cursor-pointer h-[75px] rounded p-[15px] w-fit
            ${tipoImovel === "casa" ? "bg-[#E04300]" : "bg-[#E0430033"}`}
        >
          <div className="flex flex-col items-center">
            <box-icon
              name="home"
              color={tipoImovel === "casa" ? "white" : "#E04300B2"}
            ></box-icon>
            <span
              className={`text-sm ${
                tipoImovel === "casa" ? "text-white" : "text-[#E04300B2]"
              }`}
            >
              Casa
            </span>
          </div>
        </div>

        <div
          onClick={() => selecionarTipo("apartamento")}
          className={`cursor-pointer h-[75px] rounded p-[15px] w-fit
            ${tipoImovel === "apartamento" ? "bg-[#E04300]" : "bg-[#E0430033"}`}
        >
          <div className="flex flex-col items-center">
            <box-icon
              name="building-house"
              color={tipoImovel === "apartamento" ? "white" : "#E04300B2"}
            ></box-icon>
            <span
              className={`text-sm ${
                tipoImovel === "apartamento" ? "text-white" : "text-[#E04300B2]"
              }`}
            >
              Apartamento
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiposImoveis;
