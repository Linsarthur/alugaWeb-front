import Aba from "../components/Aba";
import Banheiros from "../components/Banheiros";
import Breadcrumb from "../components/Breadcrumbs";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Garagens from "../components/Garagens";
import Localizacao from "../components/Localizacao";
import Navbar from "../components/Navbar";
import PrecoDeAte from "../components/PrecoDeAte";
import QuantidadeQuartos from "../components/QuantidadeQuartos";
import TiposImoveis from "../components/TiposImoveis";

const Pesquisa = () => {
  return (
    <>
      <Navbar />
      <div>
        <Breadcrumb />  
      </div>

      <div className="flex p-[20px] gap-5 justify-between">
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
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pesquisa;
