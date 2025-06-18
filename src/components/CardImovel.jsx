import { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import casaCard from "../assets/casaCard.png";
import { FiltroContext } from "../contexts/FiltroContext";
import { AXIOS } from "../services";

const CardImovel = () => {
  const [todosImoveis, setTodosImoveis] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const {
    tipoNegocio,
    localizacao,
    tipoImovel,
    precoMin,
    precoMax,
    quartos,
    banheiros,
    garagens,
  } = useContext(FiltroContext);

  const usuario = JSON.parse(sessionStorage.getItem("usuario"));
  const usuario_id = usuario?.usuario_id;

  useEffect(() => {
    async function carregarImoveis() {
      try {
        const response = await AXIOS.get("/imoveis", {
          params: {
            modalidade: tipoNegocio || undefined,
            cidade: localizacao || undefined,
            tipo: tipoImovel || undefined,
            precoMin: precoMin || undefined,
            precoMax: precoMax || undefined,
            quartos: quartos || undefined,
            banheiros: banheiros || undefined,
            garagens: garagens || undefined,
          },
        });
        setTodosImoveis(response.data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    }

    carregarImoveis();
  }, [
    tipoNegocio,
    localizacao,
    tipoImovel,
    precoMin,
    precoMax,
    quartos,
    banheiros,
    garagens,
  ]);

  useEffect(() => {
    async function carregarFavoritos() {
      if (!usuario_id) return;
      try {
        const response = await AXIOS.get(`/favoritos/${usuario_id}`);
        const idsFavoritos = response.data.map((fav) => fav.imovel_id);
        setFavoritos(idsFavoritos);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    }

    carregarFavoritos();
  }, [usuario_id]);

  const toggleFavorito = async (imovel_id) => {
    if (!usuario_id) {
      alert("Você precisa estar logado para favoritar um imóvel.");
      return;
    }

    const jaFavoritado = favoritos.includes(imovel_id);

    try {
      if (jaFavoritado) {
        await AXIOS.delete("/favoritos", {
          data: { usuario_id, imovel_id },
        });
        setFavoritos((prev) => prev.filter((id) => id !== imovel_id));
      } else {
        await AXIOS.post("/favoritos", { usuario_id, imovel_id });
        setFavoritos((prev) => [...prev, imovel_id]);
      }
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
      alert("Erro ao atualizar favoritos.");
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {todosImoveis.map((imovel) => {
        const isFavoritado = favoritos.includes(imovel.imovel_id);

        return (
          <div
            key={imovel.imovel_id}
            className="flex border border-gray-500/15 rounded-2xl gap-5"
          >
            <div>
              <img
                src={imovel.imovel_imagem || casaCard}
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
              <div
                onClick={() => toggleFavorito(imovel.imovel_id)}
                className="w-[50px] h-[50px] flex items-center justify-center rounded cursor-pointer"
              >
                <FaHeart
                  size={28}
                  className={isFavoritado ? "text-red-500" : "text-gray-300"}
                />
              </div>

              <div className="mt-auto">
                <p className="font-bold text-[24px] text-[#E04300]">
                  R$ {Number(imovel.imovel_valor).toLocaleString("pt-BR")}
                </p>
                <div className="cursor-pointer bg-[#E0430033] text-[#E04300B2] hover:text-white mt-3 p-[14px] text-center rounded-[8px] hover:bg-[#E04300]">
                  <button className="">Contatar</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardImovel;
