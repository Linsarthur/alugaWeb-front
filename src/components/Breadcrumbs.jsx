import { useContext } from "react";
import { FiltroContext } from "../contexts/FiltroContext";
import Ordenar from "./Ordernar";

const Breadcrumb = ({ imovel_estado, imovel_cidade, totalImoveis }) => {
  const { tipoNegocio } = useContext(FiltroContext);

  const tipoNegocioFormatado = tipoNegocio === "aluguel" ? "alugar" : "comprar";
  const tipoNegocioTitulo = tipoNegocio === "aluguel" ? "ALUGAR" : "COMPRAR";

  return (
    <>
      <div className="py-8 px-[50px] flex justify-between items-center">
        <div className="flex gap-2">
          <button className="cursor-pointer p-5 bg-[#E0430033] text-[#E04300B2] rounded-2xl font-bold hover:bg-[#E04300] hover:text-white">
            <a href="/cadastrarimovel">Divulgar imóvel</a>
          </button>
        </div>
        <div>
          <div className="pl-40">
            <h4 className="flex text-[#595959] font-bold">
              Imóveis para {tipoNegocioTitulo}
              <box-icon name="chevron-right" color="#595959"></box-icon>{" "}
              {imovel_estado}
              <box-icon name="chevron-right" color="#595959"></box-icon>
              {imovel_cidade}
            </h4>
            <div>
              <div className="">
                <h2 className="font-bold text-[20px] text-[#E04300]">
                  {totalImoveis} imóveis para {tipoNegocioFormatado} em{" "}
                  {imovel_cidade} - {imovel_estado}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Ordenar />
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
