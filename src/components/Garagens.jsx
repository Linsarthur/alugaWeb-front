import { useContext } from "react";
import { FiltroContext } from "../contexts/FiltroContext";

const Garagens = () => {
  const { garagens, setGaragens } = useContext(FiltroContext);

  const opcoes = [1, 2, 3, 4];

  return (
    <div className="p-[20px] border border-[#00000026] w-[370px] pb-[30px]">
      <label className="text-[#595959] font-bold mt-[15px] mb-[15px] block">
        Garagens
      </label>
      <div className="flex gap-5 pt-5">
        {opcoes.map((qtd) => (
          <button
            key={qtd}
            type="button"
            onClick={() => setGaragens(garagens === qtd ? null : qtd)}
            className={`px-4 py-2 rounded cursor-pointer
              ${
                garagens === qtd
                  ? "bg-[#E04300] text-white"
                  : "bg-[#E0430033] text-[#E04300B2]"
              }`}
          >
            +{qtd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Garagens;
