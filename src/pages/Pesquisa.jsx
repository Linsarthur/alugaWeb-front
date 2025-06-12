import Aba from "../components/Aba";
import Banheiros from "../components/Banheiros";
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
      <div className="flex p-5 gap-5">
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
      <Footer/>
    </>
  );
};

export default Pesquisa;
