import { useContext, useEffect, useState } from "react";
import Aba from "../components/Aba";
import Banheiros from "../components/Banheiros";
import Breadcrumb from "../components/Breadcrumbs";
import CardImovel from "../components/CardImovel";
import Footer from "../components/Footer";
import Garagens from "../components/Garagens";
import Localizacao from "../components/Localizacao";
import Navbar from "../components/Navbar";
import PrecoDeAte from "../components/PrecoDeAte";
import QuantidadeQuartos from "../components/QuantidadeQuartos";
import TiposImoveis from "../components/TiposImoveis";
import { FiltroContext } from "../contexts/FiltroContext";
import { AXIOS } from "../services";

const Pesquisa = () => {
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
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function buscar() {
      try {
        const cidadeEstado = localizacao?.split(" - ");
        const params = {
          modalidade: tipoNegocio,
          cidade: cidadeEstado?.[0],
          estado: cidadeEstado?.[1],
          tipo: tipoImovel,
          precoMin: precoMin ?? undefined,
          precoMax: precoMax ?? undefined,
          quartos: quartos ?? undefined,
          banheiros: banheiros ?? undefined,
          garagens: garagens ?? undefined,
        };

        const { data } = await AXIOS.get("/imoveis", { params });
        setImoveis(data);
      } catch (err) {
        console.error("Erro na busca:", err);
      }
    }

    buscar();
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
  return (
    <>
      <Navbar />
      <div className="px-[50px] ">
        <Breadcrumb
          totalImoveis={imoveis.length}
          imovel_estado="CE"
          imovel_cidade="Fortaleza"
        />
      </div>

      <div className="flex px-[100px] pb-[50px] gap-5 justify-between">
        <div className="">
          <Aba />
          <Localizacao />
          <TiposImoveis />
          <PrecoDeAte />
          <QuantidadeQuartos />
          <Banheiros />
          <Garagens />
        </div>
        <div className="">
          <div className="flex flex-col gap-7">
            <CardImovel imoveis={imoveis} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pesquisa;
