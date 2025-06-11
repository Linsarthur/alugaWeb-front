import Aba from "../components/Aba";
import Banheiros from "../components/Banheiros";
import Garagens from "../components/Garagens";
import Localizacao from "../components/Localizacao";
import PrecoDeAte from "../components/PrecoDeAte";
import QuantidadeQuartos from "../components/QuantidadeQuartos";
import TiposImoveis from "../components/TiposImoveis";


const Testes = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-[100px]">
        <Aba />
        <Localizacao />
        <TiposImoveis />
        <PrecoDeAte />
        <QuantidadeQuartos />
        <Banheiros />
        <Garagens />
      </div>
    </>
  );
};

export default Testes;
