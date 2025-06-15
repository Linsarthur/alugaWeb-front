import { useEffect, useState } from "react";
import { AXIOS } from "../services";
import Card from "./Card";

const Cards = () => {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function carregarImoveis() {
      try {
        const response = await AXIOS.get("/imoveis"); // ajuste a rota se necessário
        setImoveis(response.data); // supondo que a resposta venha como um array de imóveis
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    }

    carregarImoveis();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {imoveis.map((imovel) => (
        <Card key={imovel.imovel_id} imovel={imovel} />
      ))}
    </div>
  );
};

export default Cards;
