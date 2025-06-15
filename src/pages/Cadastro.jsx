import casinha from "../assets/casinha.png";
import FormCadastro from "../components/FormCadastro";
const Cadastro = () => {
  return (
    <>
      <div className="flex items-center h-screen flex-col">
        <div className="border-[1px] border-gray-500/20 rounded shadow px-7 pt-10 pb-7 mt-[133px]">
          <div className="flex justify-center items-center gap-4">
            <div className="pb-[50px]">
              <box-icon name="left-arrow-alt" color="#e04300"></box-icon>
            </div>
            <div className="flex justify-center items-center gap-4 pb-[50px]">
              <div className="w-[40px] h-[40px] bg-[#E04300] rounded flex justify-center items-center">
                <img src={casinha} alt="" className="" />
              </div>
              <div>
                <h2 className="text-[rgb(223,67,0)] font-bold ">Aluga Web</h2>
              </div>
            </div>
          </div>
          <FormCadastro />
        </div>
        <div className="mt-52 pb-5 text-[#E04300] font-bold">
          <h6>Aluga web, todos os direitos reservados.</h6>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
