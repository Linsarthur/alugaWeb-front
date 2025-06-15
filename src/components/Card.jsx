import casaCard from "../assets/casaCard.png";

const Card = ({ imovel }) => {
  return (
    <div className="flex border border-gray-500/15 rounded-2xl gap-5">
      <div>
        <img
          src={casaCard || imovel.imovel_imagem }
          alt="Imagem do imóvel"
          className="h-full"
        />
      </div>

      <div className="pt-5 pb-5 flex flex-col gap-20">
        <div className="text-[#595959] text-[16px] font-bold">
          <h2>
            {imovel.imovel_logradouro}, {imovel.imovel_numero}
          </h2>
          <h2>
            {imovel.imovel_bairro}, {imovel.imovel_cidade}/
            {imovel.imovel_estado}
          </h2>
        </div>

        <p className="text-[#959595] text-[16px]">{imovel.imovel_descricao}</p>

        <div className="flex text-[#959595]">
          <p className="mr-5">{imovel.imovel_area}m²</p>
          <box-icon name="bed" color="#595959"></box-icon>
          <p className="mr-5 ml-1">{imovel.imovel_quartos} Quartos</p>
          <box-icon name="car" color="#595959"></box-icon>
          <p className="ml-1">{imovel.imovel_garagens} Garagem</p>
        </div>
      </div>

      <div>
        <div className="flex justify-end pt-5 pr-5 mb-4">
          <div className="w-[50px] h-[50px] bg-[#E0430033] flex items-center justify-center rounded cursor-pointer">
            <box-icon name="heart" color="#E04300B2"></box-icon>
          </div>
        </div>

        <div className="mb-4 mt-20 p-5">
          <p className="font-bold text-[24px] text-[#E04300]">
            R$ {Number(imovel.imovel_valor).toLocaleString("pt-BR")}
          </p>
        </div>

        <div className="pr-5 pb-5 mt-15">
          <div className="bg-[#E04300] p-[14px] text-center rounded-[8px]">
            <button className="text-white cursor-pointer">Contatar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
