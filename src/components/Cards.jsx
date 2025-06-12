import imageCasa from "../assets/casaCard.png";

const Cards = () => {
  return (
    <>
      <div className="flex border border-gray-500/15 rounded w-fit gap-5">
        <div>
          <img src={imageCasa} alt="" />
        </div>
        <div className="pt-5 ">
          <div className="text-[#595959] mb-10">
            <h2>Rua Eduardo Bezerra, 1182</h2>
            <h2>São joão do Taouape, Fortaleza/CE</h2>
          </div>

          <p className="text-[#959595] mb-[60px]">
            Casa para alugar, 500m²
            <br /> Excelente Casa à venda ou Locação
          </p>

          <div className="flex text-[#959595]">
            <p>500m²</p> <p>3 quartos</p> <p>5 Garagem</p>
          </div>
        </div>

        <div className=" pt-5 pr-5 pl-10">
          <div className="flex justify-end">
            <div className="w-[50px] h-[50px] mb-[35px] bg-[#E0430033] flex items-center justify-center rounded cursor-pointer">
            <box-icon name="heart" color="#E04300B2"></box-icon>
          </div>
          </div>
          <div className="mb-[60px]">
            <p className="font-bold text-[24px] leading text-[#E04300]">R$ 5.000</p>
          </div>

          <div className="bg-[#E04300] p-[14px] text-center rounded-[8px]">
            <button className="text-white">Contatar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
