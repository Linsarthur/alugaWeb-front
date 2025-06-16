import { useNavigate } from "react-router";
import Ordenar from "./Ordernar";

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-8 px-[50px] flex justify-between items-center">
        <div className="flex gap-2">
          <button className="cursor-pointer p-5 bg-[#E0430033] text-[#E04300B2] rounded-2xl font-bold hover:bg-[#E04300] hover:text-white">
            <a href="/cadastrarimovel">Divulgar imóvel</a>
          </button>
         
        </div>
        <div>
          <div className="pl-40">
            <h4 className="flex text-[#595959] font-bold">
              Casas para alugar{" "}
              <box-icon name="chevron-right" color="#595959"></box-icon> CE
              <box-icon name="chevron-right" color="#595959"></box-icon>
              Fortaleza
            </h4>
            <div>
              <div className="">
                <h2 className="font-bold text-[20px] text-[#E04300]">
                  122 Casas para alugar em Fortaleza - CE
                </h2>
              </div>

              <div className="flex gap-3 mt-5">
                <button className="cursor-pointer flex gap-2 w-fit px-[12px] text-[14px] py-[11px] border-2 border-[#E04300] rounded text-[#E04300]">
                  Cidade{" "}
                  <span className="text-white bg-[#E04300] block w-[18px] h-[18px] leading-[18px] rounded-2xl ">
                    4
                  </span>
                </button>
                <button className="cursor-pointer flex gap-2 w-fit px-[12px] text-[14px] py-[11px] border-2 border-[#959595] rounded text-[#959595]">
                  Cidade{" "}
                  <span className="text-white bg-[#959595] block w-[18px] h-[18px] leading-[18px] rounded-2xl ">
                    4
                  </span>
                </button>
                <button className="cursor-pointer flex gap-2 w-fit px-[12px] text-[14px] py-[11px] border-2 border-[#959595] rounded text-[#959595]">
                  Cidade{" "}
                  <span className="text-white bg-[#959595] block w-[18px] h-[18px] leading-[18px] rounded-2xl ">
                    4
                  </span>
                </button>
                <button className="cursor-pointer flex gap-2 w-fit px-[12px] text-[14px] py-[11px] border-2 border-[#959595] rounded text-[#959595]">
                  Cidade{" "}
                  <span className="text-white bg-[#959595] block w-[18px] h-[18px] leading-[18px] rounded-2xl ">
                    4
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Ordenar />
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
