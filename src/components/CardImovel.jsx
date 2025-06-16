import { useContext, useEffect, useState } from "react";
import casaCard from "../assets/casaCard.png";
import { FiltroContext } from "../contexts/FiltroContext";
import { AXIOS } from "../services";

const CardImovel = () => {
  const [todosImoveis, setTodosImoveis] = useState([]);
  const { tipoNegocio } = useContext(FiltroContext);
  const { localizacao } = useContext(FiltroContext);
  const { tipoImovel } = useContext(FiltroContext);
  const { precoMin, precoMax } = useContext(FiltroContext);
  const { quartos } = useContext(FiltroContext);
  const { banheiros } = useContext(FiltroContext);
  const { garagens } = useContext(FiltroContext);

  useEffect(() => {
    async function carregarImoveis() {
      try {
        const response = await AXIOS.get("/imoveis");
        setTodosImoveis(response.data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    }

    carregarImoveis();
  }, []);

 const imoveisFiltrados = todosImoveis.filter((imovel) => {
  return (
    (!tipoNegocio || imovel.imovel_modalidade === tipoNegocio) &&
    (!localizacao ||
      imovel.imovel_cidade
        .toLowerCase()
        .includes(localizacao.toLowerCase())) &&
    (!tipoImovel || imovel.imovel_tipo === tipoImovel) &&
    (precoMin === null || precoMin === undefined || imovel.imovel_valor >= precoMin) &&
    (precoMax === null || precoMax === undefined || imovel.imovel_valor <= precoMax) &&
    (quartos === null || quartos === undefined || imovel.imovel_quartos == quartos) &&
    (banheiros === null || banheiros === undefined || imovel.imovel_banheiros == banheiros) &&
    (garagens === null || garagens === undefined || imovel.imovel_garagens == garagens)
  );
});


  return (
    <div className="flex flex-col gap-10">
      {imoveisFiltrados.map((imovel) => (
        <div
          key={imovel.imovel_id}
          className="flex border border-gray-500/15 rounded-2xl gap-5"
        >
          <div>
            <img
              src={casaCard  }
              alt="Imagem do imóvel"
              className="h-full max-w-[300px] object-cover rounded-l-2xl"
            />
          </div>

          <div className="pt-5 pb-5 flex flex-col gap-10 flex-1 justify-between">
            <div className="text-[#595959] text-[16px] font-bold">
              <h2>
                {imovel.imovel_logradouro}, {imovel.imovel_numero},{" "}
                {imovel.imovel_tipo}
              </h2>
              <h2>
                {imovel.imovel_bairro}, {imovel.imovel_cidade}/
                {imovel.imovel_estado}
              </h2>
            </div>

            <p className="text-[#959595] text-[16px]">
              {imovel.imovel_descricao}
            </p>

            <div className="flex text-[#959595] items-center">
              <p className="mr-5">{imovel.imovel_area}m²</p>
              <box-icon name="bed" color="#595959"></box-icon>
              <p className="mr-5 ml-1">{imovel.imovel_quartos} Quartos</p>
              <box-icon name="car" color="#595959"></box-icon>
              <p className="ml-1">{imovel.imovel_garagens} Garagem</p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end p-5">
            <div className="w-[50px] h-[50px] bg-[#E0430033] flex items-center justify-center rounded cursor-pointer hover:bg-[#E04300]/30 hover:text-white">
              <box-icon name="heart" color="#E04300B2" className="hover:text-white"></box-icon>
            </div>

            <div className="mt-auto">
              <p className="font-bold text-[24px] text-[#E04300]">
                R$ {Number(imovel.imovel_valor).toLocaleString("pt-BR")}
              </p>
              <div className=" cursor-pointer bg-[#E0430033] text-[#E04300B2] hover:text-white  mt-3 p-[14px] text-center rounded-[8px]  hover:bg-[#E04300] ">
                <button className="">Contatar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardImovel;
