const Footer = () => {
  return (
    <>
      <div className="bg-[#DF4300] flex justify-between ">
        <div className=" flex items-center">
          <div className="bg-[#FFFFFF] rounded-[4px] w-[36px] h-[36px]  ml-[56px] py-[20px] flex justify-center items-center">
            <box-icon name="home-heart" type="solid" color="#df4300"></box-icon>
          </div>

          <h3 className="text-[#FFFFFF] ml-[10px] font-bold">Aluga Web</h3>
        </div>

        <div className="flex items-center">
          <h3 className="text-[#FFFFFF] font-bold p-[20px] mr-[50px] ">
            Todos os direitos reservados.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
