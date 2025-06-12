import imageCasa from "../assets/casaCard.png";

const Cards = () => {
  return (
    <>
      <div className="">
        <div className="flex border border-gray-500/15 rounded-2xl gap-5">
          <div className="">
            <img src={imageCasa} alt="" className="h-full" />
          </div>
          <div className="pt-5 pb-5 flex flex-col gap-5">
            <div className="text-[#595959] text-[16px] ">
              <h2>Rua Eduardo Bezerra, 1182</h2>
              <h2>São joão do Taouape, Fortaleza/CE</h2>
            </div>

            <p className="text-[#959595] text-[16px] ">
              Casa para alugar, 500m² Excelente Casa à venda ou Locação
            </p>

            <div className="flex  text-[#959595]  ">
              <p className="mr-5">500m²</p>
              <box-icon name="bed" color="#595959"></box-icon>
              <p className="mr-5 ml-1">3 Quartos</p>
              <box-icon name="car" color="#595959"></box-icon>
              <p className="ml-1">5 Garagem</p>
            </div>
          </div>

          <div className="">
            <div className="flex justify-end pt-5 pr-5 mb-4">
              <div className="w-[50px] h-[50px]  bg-[#E0430033] flex items-center justify-center rounded cursor-pointer">
                <box-icon name="heart" color="#E04300B2"></box-icon>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-bold text-[16px] leading text-[#E04300]">
                R$ 5.000
              </p>
            </div>

            <div className="pr-5 pb-5">
              <div className="bg-[#E04300] p-[14px] text-center rounded-[8px] ">
                <button className="text-white cursor-pointer ">Contatar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
