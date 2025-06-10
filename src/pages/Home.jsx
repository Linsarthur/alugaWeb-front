import pin from '../assets/pin.png';
import mulher from '../assets/mulher.png';
import { useNavigate } from 'react-router';


const Home = () => {

    // const navigate = useNavigate();

    return (
        <>
            <div className="h-screen flex  justify-around bg-white">
                <main className="flex flex-1 items-center justify-between px-[50px] py-16">
                    <div className="w-full">
                        <h1 className="text-[36px] font-extrabold leading-[100%] text-[#1E1E1E]">
                            Onde você quer morar
                        </h1>

                        <div className="flex items-center w-[606px]  border-[3px] border-[#E04300] rounded-full overflow-hidden p-[11px] mt-[30px]">
                            <img src={pin} alt="Ícone de localização" className="w-[23px] ml-[29px]" />

                            <input
                                type="text"
                                className="flex-1 h-full outline-none text-[#1E1E1E] text-base"
                            />

                            <button
                                className="w-[116px] h-[54px] bg-[#E04300] text-white font-bold rounded-full cursor-pointer"
                                // onClick={() => navigate('/')}
                            >
                                Buscar
                            </button>
                        </div>
                    </div>

                    <div className="relative w-full h-screen overflow-visible ml-20">
                        <img
                            src={mulher}
                            alt="Mulher sorrindo com celular"
                            className="absolute top-[158px] left-[60px] w-[550px] h-[489px] object-contain"
                        />
                    </div>


                </main>

            </div>
        </>
    );
}

export default Home;