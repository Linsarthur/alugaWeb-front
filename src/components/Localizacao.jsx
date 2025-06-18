import { useContext } from "react";
import { FiltroContext } from "../contexts/FiltroContext";

const Localizacao = () => {
  const { localizacao, setLocalizacao } = useContext(FiltroContext);
  return (
    <>
      <div className="p-[34px] border border-[#00000026] w-fit">
        <form>
          <label className="flex flex-col text-[#595959] font-bold">
            Localização
          </label>
          <input
            type="text"
            className="px-[20px] mt-3 bg-gray-500/15 w-[300px] h-[50px] rounded-2xl border border-[#00000026] focus:outline-[#E04300]"
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Digite a cidade ou estado"
          />
        </form>
      </div>
    </>
  );
};

export default Localizacao;
