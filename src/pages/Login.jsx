import casinha from "../assets/casinha.png";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col mt-[133px]">
        <div className="border-[1px] border-gray-500/20 rounded shadow pt-[46px] pl-[37px] pr-[37px] pb-[28px] mt-[133px] mx-[16px]">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4 pb-[50px]">
              <div className="w-[40px] h-[40px] bg-[#E04300] rounded flex items-center">
                <img src={casinha} alt="" className="p-[6px] pl-[140px" />
              </div>
              <div>
                <h2 className="text-[#DF4300] font-bold text-center">
                  Aluga Web
                </h2>
              </div>
            </div>
          </div>
          <div>
            <form className="w-[344px]">
              <label className="block mb-2 text-[#595959]">Email</label>
              <input
                type="text"
                className="bg-gray-500/15 rounded-[8px] h-[54px] w-[344px] outline-transparent border-[1px] border-[#D9D9D9]"
              />

              <label className="block mt-[30px] mb-2 text-[#595959]">Senha</label>
              <input
                type="password"
                className="bg-gray-500/15 rounded-[8px] h-[54px] w-[344px] outline-transparent border-[1px] border-[#D9D9D9]"
              />
              <div className="flex justify-center gap-[71px] mt-[25px] mb-[29px] ">
                <a
                  href=""
                  className="block flex font-bold text-[12px] pl-[62px] whitespace-nowrap"
                >
                  Esqueci minha senha
                </a>
                <a href="" className="block flex font-bold text-[12px] pr-[92px] whitespace-nowrap">
                  Criar conta
                </a>
              </div>
              <button className="w-[344px] mt-[29px] h-[50px] bg-[#E04300] rounded-[8px] text-[#FFFFFF]">
                Entrar
              </button>
            </form>
          </div>
        </div>
        <div className="mt-[70px] pb-5 text-[#E04300] font-bold mb-[40px]">
          <h6>Aluga web, todos os direitos reservados.</h6>
        </div>
      </div>
    </>
  );
};

export default Login;
