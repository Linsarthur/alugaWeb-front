import { useEffect, useState } from "react";
import CardFavorite from "../components/CardFavorite";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AXIOS } from "../services";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
    const token = sessionStorage.getItem("token");

    if (!usuario || !token) {
      console.warn("Usuário não logado.");
      return;
    }

    async function carregarFavoritos() {
      try {
        const response = await AXIOS.get(`/favoritos/${usuario.usuario_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFavorites(response.data);
      } catch (err) {
        console.error("Erro ao buscar favoritos:", err);
      }
    }

    carregarFavoritos();
  }, []);

const handleRemove = async (favorito) => {
  const usuario = JSON.parse(sessionStorage.getItem("usuario"));
  const usuario_id = usuario?.usuario_id;
  const imovel_id = favorito.imovel_id; // ou favorito.imoveis.imovel_id, dependendo do formato

  if (!usuario_id || !imovel_id) {
    alert("Dados insuficientes para remover o favorito.");
    return;
  }

  try {
    await AXIOS.delete(`/favoritos/${usuario_id}/${imovel_id}`);

    setFavorites((prev) =>
      prev.filter((fav) => fav.favorito_id !== favorito.favorito_id)
    );
  } catch (error) {
    console.error("Erro ao remover favorito:", error);
    alert("Erro ao remover favorito.");
  }
};


  const handleContact = (id) => {
    console.log(`Contatar favorito #${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 p-8 flex justify-center">
        {favorites.length === 0 ? (
          <p className="text-gray-500 text-lg">Nenhum imóvel favoritado.</p>
        ) : (
          <div className="flex gap-10">
            {favorites
              .filter((fav) => fav.imoveis) 
              .map((fav) => {
                const imovel = fav.imoveis;

                return (
                  <CardFavorite
                    key={fav.favorito_id}
                    property={{
                      id: imovel.imovel_id,
                      image: imovel.imovel_imagem,
                      title: `${imovel.imovel_logradouro}, ${imovel.imovel_numero}`,
                      address: `${imovel.imovel_bairro}, ${imovel.imovel_cidade}/${imovel.imovel_estado}`,
                      descriptionLine1: `${imovel.imovel_tipo} para ${imovel.imovel_modalidade}, ${imovel.imovel_area}m²`,
                      descriptionLine2: imovel.imovel_descricao,
                      size: imovel.imovel_area,
                      bedrooms: imovel.imovel_quartos,
                      garage: imovel.imovel_garagens,
                      price: Number(imovel.imovel_valor),
                    }}
                    onRemove={() => handleRemove(fav)}
                    onContact={() => handleContact(imovel.imovel_id)}
                  />
                );
              })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
