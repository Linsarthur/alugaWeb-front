import Aba from "../components/Aba";
import rodape from "../assets/casinhalaranja.png";

const Testes = () => {
  return (
    <>
      <div className="bg-[#DF4300] flex justify-between h-[100px] mt-[647px]">
        <div className=" flex items-center">
          <div className="bg-[#FFFFFF] rounded-[4px] w-[36px] h-[36px] mt-[38px] ml-[56px] mb-[38px] flex justify-center items-center">
            <img
              src={rodape}
              alt="Rodapé"
              className=" " />
          </div>

          <h3 className="text-[#FFFFFF] ml-[10px] font-bold">Aluga Web</h3>
        </div>


        <div>
          <h3 className="text-[#FFFFFF] font-bold mt-[38px] mr-[50px] ">Todos os direitos reservados.</h3>
        </div>
      </div>

    </>
  );
};

export default Testes;
