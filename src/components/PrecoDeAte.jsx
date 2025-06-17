import { useContext } from "react";
import { FiltroContext } from "../contexts/FiltroContext";

const PrecoDeAte = () => {
  const { precoMin, setPrecoMin, precoMax, setPrecoMax } =
    useContext(FiltroContext);

  const handlePrecoMin = (e) => {
    const valor = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
    setPrecoMin(valor ? Number(valor) : null);
  };

  const handlePrecoMax = (e) => {
    const valor = e.target.value.replace(/\D/g, "");
    setPrecoMax(valor ? Number(valor) : null);
  };
  return (
    <>
      <div className="p-[20px] border border-[#00000026] w-[370px] pb-[30px]">
        <form>
          <div className="flex gap-5">
            <div className="w-fit">
              <label className="text-[#595959] font-bold mt-[15px] mb-[15px]">
                Preços a partir de
              </label>
              <input
                type="text"
                className="bg-[#0000000D] h-[50px] pl-2 rounded w-[150px]"
                placeholder="0"
                value={precoMin || ""}
                onChange={handlePrecoMin}
              ></input>
            </div>
            <div className="w-fit">
              <label className="text-[#595959] font-bold mt-[15px] mb-[15px]">
                Até
              </label>
              <input
                type="text"
                className="bg-[#0000000D] h-[50px] pl-2 rounded w-[150px]"
                placeholder="0"
                value={precoMax || ""}
                onChange={handlePrecoMax}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PrecoDeAte;
