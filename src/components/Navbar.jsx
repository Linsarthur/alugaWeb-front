import { Button } from "antd";
import icone from "../assets/casinha.png";
import icone2 from "../assets/icon-user.png";
import favorito from "../assets/coracao.png";
import imagemlogin from "../assets/silvio.png";
import { useContext } from "react";
import { usuarioContext } from "../contexts/usuarioContext";
import { Link } from "react-router";

const Navbar = () => {

  const { logado } = useContext(usuarioContext)
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
        {
          logado ? (
            <div className="flex justify-between items-center mt-[29px] gap-4">
              <div>
                {/* icone do coração */}
                <img 
                src={favorito} 
                alt="Favoritos" 
                className="mt-[29px]"/>
                <Link to="/pesquisa">Favoritos</Link>
              </div>
              <div>
                <h2>nome</h2>
                <h3>Sair</h3>
              </div>
              <div className="flex mt-[16px] mr-[50px]">
                <img 
                src={imagemlogin}
                alt="" 
                className="flex items-center"/>
              </div>
            </div>
          ) : <a href="/login"
            className="rounded-[8px] mb-[14px] mt-[20px] mr-[50px] px-[30px] py-[20px]"
            variant="solid"
          >
            <img src={icone2} alt="Entrar" className="" />
            Entrar
          </a>
        }
      </div>
    </header>
  );
};

export default Navbar;
