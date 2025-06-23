import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import lupa from "../assets/lupa.png";
import mulher from "../assets/mulher.png";
import pin from "../assets/pin.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [estados, setEstados] = useState([]);
  const navigate = useNavigate()

  async function buscarEstados() {
    const request = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    );
    const response = await request.json();

    setEstados(response);
  }

  useEffect(() => {
    buscarEstados();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" flex justify-between bg-white max-[640px]:flex-col max-[640px]:items-center max-[640px]:justify-center max-[640px]:px-4 pt-9 xl:relative">
        <main className="flex flex-1 items-center px-[50px]  max-[640px]:flex-col max-[640px]:gap-8 max-[640px]:px-6 max-[640px]:w-full xl: justify-between">
          <div className="w-full flex flex-col justify-center pt-[100px] xl:justify-start xl:w-1/2">
            <h1 className="text-[28px] font-extrabold mb-2 leading-[100%] text-[#1E1E1E]">
              Onde você quer morar?
            </h1>

            <div className="flex items-center justify-between border-[3px] border-[#E04300] rounded-full p-1 w-full ">
              <img
                src={pin}
                alt="Ícone de localização"
                className=""
              />
              <select className="flex flex-1 px-2 appearance-none outline-none mx-5">
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.sigla}>
                    {estado.nome}
                  </option>
                ))}
              </select>

              <button
              onClick={() => navigate("/pesquisa")}
                className=" bg-[#E04300] text-white font-bold rounded-full cursor-pointer 
                            w-[54px] h-[54px] flex justify-center items-center"
              >
                <span className="block md:hidden">Buscar</span>
                <img src={lupa} alt="" className="" />
              </button>
            </div>
          </div>

          <div className="mt-20">
            <img
              src={mulher}
              alt="Mulher sorrindo com celular"
              className=""
            />
          </div>
        </main>
      </div>
        <Footer />
    </>
  );
};
export default Home;
