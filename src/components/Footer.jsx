const Footer = () => {
  return (
    <>
      <div className="bg-[#DF4300] w-full flex flex-col items-center xl:pt-[5px] xl:flex-row xl:justify-between xl:absolute xl:bottom-0">
        <div className="flex items-center pt-12 pb-[7px] xl:p-[38px]">
          <div className="bg-[#FFFFFF] rounded-[4px] w-[36px] h-[36px] py-[20px] flex justify-center items-center xl:py-0">
            <box-icon name="home-heart" type="solid" color="#df4300"></box-icon>
          </div>
          <h3 className="text-[#FFFFFF] ml-[10px] font-bold">Aluga Web</h3>
        </div>
        <div className="mb-5 xl:mb-0">
          <h3 className="text-[#FFFFFF] font-bold">
            Todos os direitos reservados.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
