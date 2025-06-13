import Ordenar from "./Ordernar";

const Breadcrumb = () => {
  return (
    <>
      <div className="py-8 px-[50px] flex justify-between items-center">
        <div className="flex gap-2">
          <button className="cursor-pointer"><box-icon name="slider-alt" color="#595959"></box-icon></button>
          <p className="text-[#595959]">Filtros</p>
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
              <h4 className="">
                <h2 className="font-bold text-[20px] text-[#E04300]">
                  122 Casas para alugar em Fortaleza - CE
                </h2>
              </h4>
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
