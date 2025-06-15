import { useContext } from "react";
import { Link } from "react-router";
import icone from "../assets/casinha.png";
import icone2 from "../assets/icon-user.png";
import imagemlogin from "../assets/silvio.png";
import { LoginContext } from "../contexts/usuarioContext";

const Navbar = () => {
  const { logado } = useContext(LoginContext);
  return (
    <header className="flex justify-between items-center  px-[50px]  border-b-1 border-[#00000026] w-full">
      <div className="flex items-center">
        <div className="bg-[#E04300] w-[36px] h-[36px] rounded-[4px] ">
          <img
            src={icone}
            alt="Logo"
            className="w-[24px] h-[24px] mt-[6px] ml-[6px]"
          />
        </div>

        <h3 className="pl-[10px] font-bold text-[#DF4300] ">Aluga Web</h3>
      </div>

      <div>
        {logado ? (
          <div className=" flex justify-between items-center my-[14px] gap-4">
            <div className="flex gap-2 mr-5">
              <box-icon name="heart" color="#595959"></box-icon>
              <Link to="/pesquisa" className="text-[#595959]">Favoritos</Link>
            </div>
            <div className="flex flex-col items-end">
              <h2 className="text-[#E04300] font-bold">Usuário da silva</h2>
              <a href="/pesquisa" className="text-[#959595] font-bold">Sair</a>
            </div>
            <div className="flex mt-[7px] mr-[50px]">
              <img src={imagemlogin} alt="" className="flex items-center" />
            </div>
          </div>
        ) : (
          <>
            <div className="">
              <button className="flex">
                <a
                  href="/login"
                  className="flex justify-center items-center gap-2 rounded-[8px] mb-[14px] mt-[20px] mr-[50px] px-[35px] py-[16px] bg-[#E0430033] text-[#E04300B2] font-bold"
                  variant="solid"
                >
                  <img src={icone2} alt="Entrar" color="#FFFFFF" />
                  Entrar
                </a>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
