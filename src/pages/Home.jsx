import pin from '../assets/pin.png';
import lupa from '../assets/lupa.png';
import mulher from '../assets/mulher.png';
// import { useNavigate } from 'react-router';
const Home = () => {
    // const navigate = useNavigate();
    return (
        <div className="h-screen flex justify-around bg-white max-[640px]:flex-col max-[640px]:items-center max-[640px]:justify-center max-[640px]:px-4 max-[640px]:py-10">
            <main className="flex flex-1 items-center justify-between px-[50px] py-16 max-[640px]:flex-col max-[640px]:gap-8 max-[640px]:px-6 max-[640px]:w-full">
                
                {/* ESQUERDA */}
                <div className="w-full max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-center">
                    <h1 className="text-[36px] font-extrabold leading-[100%] text-[#1E1E1E] max-[640px]:text-[24px] max-[640px]:text-center max-[640px]:leading-snug">
                        Onde você quer morar
                    </h1>
                    
                    <div className="flex items-center w-[606px] border-[3px] border-[#E04300] rounded-full overflow-hidden p-[11px] mt-[30px] max-[640px]:w-full max-[640px]:max-w-[320px] max-[640px]:px-4 max-[640px]:py-3 max-[640px]:mt-5 max-[640px]:gap-3">
                        <img src={pin} alt="Ícone de localização" className="w-[23px] ml-[29px] max-[640px]:ml-0" />
                        <input
                            type="text"
                            className="w-[180px] lg:w-auto lg:flex-1 h-full outline-none text-[#1E1E1E] text-base px-3"
                        />
                        
                        <button
                            className="lg:w-[116px] lg:h-[54px] bg-[#E04300] text-white font-bold rounded-full cursor-pointer 
                            w-[54px] h-[54px] max-[640px]:rounded-full 
                            max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center"
                        >
                            
                            {/* TEXTO NO DESKTOP */}
                            <span className="block max-[640px]:hidden">Buscar</span>
                            <img src={lupa} alt="" className='md:hidden'/>
                        </button>
                    </div>
                </div>
                
                <div className="relative w-full h-screen overflow-visible ml-20 max-[640px]:ml-0 max-[640px]:h-auto max-[640px]:flex max-[640px]:justify-center">
                    <img
                        src={mulher}
                        alt="Mulher sorrindo com celular"
                        className="absolute top-[158px] left-[60px] w-[550px] h-[489px] object-contain max-[640px]:static max-[640px]:w-[260px] max-[640px]:h-auto"
                    />
                </div>
            </main>
        </div>
    );
};
export default Home;
