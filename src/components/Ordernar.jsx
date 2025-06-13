import { useState } from "react";

const Ordenar = () => {
  const [filtro, setFiltro] = useState("Mais relevantes");

  return (
    <div className="w-full flex justify-end ">
      <div className="w-[282px] h-[65px] bg-white border border-[#00000026] rounded-[8px] px-4 py-2 flex flex-col">
        <h2 className="font-normal text-[14px] leading-tight text-[#595959]">
          Ordenar por
        </h2>

        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full h-8 bg-transparent border-none text-[14px] font-bold text-[#E04300] focus:outline-0"
        >
          <option>Mais relevantes</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais populares</option>
        </select>
      </div>
    </div>
  );
};

export default Ordenar;
