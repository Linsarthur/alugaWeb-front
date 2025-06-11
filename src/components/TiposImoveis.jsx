const TiposImoveis = () => {
  return (
    <>
      <div className="p-[34px] border border-[#00000026] w-[370px]">
        <form>
          <label className="text-[#595959] font-bold mt-[15px] mb-[15px]">
            Tipos de imóveis
          </label>
          <div className="flex gap-5 pt-[14px]">
            <div className="bg-[#E04300] cursor-pointer h-[75px] rounded p-[15px] w-fit">
              <div className="flex flex-col items-center">
                <box-icon name="home" color="white"></box-icon>
                <button className="text-white">Casa</button>
              </div>
            </div>
            <div className="bg-[#E0430033] cursor-pointer h-[75px] rounded p-[15px] w-fit">
              <div className="flex flex-col items-center">
                <box-icon name="building-house" color="#E04300B2"></box-icon>
                <button className="text-[#E04300B2] cursor-pointer">Apartamento</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TiposImoveis;
