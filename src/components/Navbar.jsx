
import { Button } from 'antd';
import icone from '../assets/casinha.png';
import icone2 from '../assets/Frame.png';


const Navbar = () => {
    return (
        <header className='flex justify-between items-center mt-[23px] ml-[50px] mr-[50px] git '>
            <div className='flex items-center'>
                <div className='bg-[#E04300] w-[36px] h-[36px] rounded-[4px] '>
                    <img
                        src={icone}
                        alt="Logo"
                        className='w-[24px] h-[24px] mt-[6px] ml-[6px]' />
                </div>

                <h3 className='pl-[10px] font-bold text-[#DF4300] '>Aluga Web</h3>
            </div>


            <div>

                <Button className='rounded-[8px] mb-[14px] mt-[20px] mr-[50px] px-[30px] py-[20px]' variant='solid'>
                    <img
                    src={icone2}
                    alt='Entrar'
                    className='' />Entrar</Button>
            </div>



        </header>
    );
}

export default Navbar;