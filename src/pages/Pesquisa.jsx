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
import { FiltroProvider } from "../contexts/FiltroContext";

const Pesquisa = () => {
  return (
    <>
      <FiltroProvider>
        <Navbar />
        <div>
          <Breadcrumb />
        </div>

        <div className="flex p-[20px] gap-5 justify-around">
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
              <CardImovel />
            </div>
          </div>
        </div>
        <Footer />
      </FiltroProvider>
    </>
  );
};

export default Pesquisa;
