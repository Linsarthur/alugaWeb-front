import { useContext } from "react";
import { FiltroContext } from "../contexts/FiltroContext";

const Aba = () => {
  const { tipoNegocio, setTipoNegocio } = useContext(FiltroContext);

  const alternarTipoNegocio = (tipo) => {
    setTipoNegocio((prev) => (prev === tipo ? "" : tipo));
  };

  return (
    <div className="flex">
      <button
        onClick={() => alternarTipoNegocio("venda")}
        className={`cursor-pointer py-[16px] px-[63px] rounded-tl-2xl ${
          tipoNegocio === "venda"
            ? "bg-[#E04300] text-white"
            : "bg-[#00000026] text-[#595959]"
        }`}
      >
        Comprar
      </button>
      <button
        onClick={() => alternarTipoNegocio("aluguel")}
        className={`cursor-pointer py-[16px] px-[65px] rounded-tr-2xl ${
          tipoNegocio === "aluguel"
            ? "bg-[#E04300] text-white"
            : "bg-[#00000026] text-[#595959]"
        }`}
      >
        Alugar
      </button>
    </div>
  );
};

export default Aba;
