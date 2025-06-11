import casinha from "../assets/casinha.png";
import FormCadastro from "../components/FormCadastro";
const Cadastro = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col mt-[70px]">
        <div className="border-[1px] border-gray-500/20 rounded shadow pt-[40px] pb-[40px] px-[28px] ">
          <div className="flex items-center gap-[75px] pr-[124px]">
            <div className="pb-[50px] ">
              <box-icon name="left-arrow-alt" color="#e04300"></box-icon>
            </div>
            <div className="flex items-center gap-4 pb-[50px]">
              <div className="w-[40px] h-[40px] bg-[#E04300] rounded flex justify-center items-center">
                <img src={casinha} alt="" className="p-[6px]" />
              </div>
              <div>
                <h2 className="text-[#DF4300] font-bold ">Aluga Web</h2>
              </div>
            </div>
          </div>
          <div>
            <FormCadastro />
          </div>
        </div>
        <div className="mt-[70px] pb-5 text-[#E04300] font-bold">
          <h6>Aluga web, todos os direitos reservados.</h6>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
