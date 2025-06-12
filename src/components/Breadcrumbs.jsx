import iconesc from'../assets/icone-setacinza.png';

const Breadcrumb = () => {
    return ( 
        <>
        <div className='text-[#595959] font-bold flex mt-[110px] mb-1 ml-[473px]'>
            <h3 className='flex justify-center items-center'>Casas para alugar</h3>
            
            <img
            src={iconesc}
            alt=""
            className="mr-2"/>
            <h3>CE</h3>
            <img
            src={iconesc}
            alt=""
            className="mr-2"/>
            <h3 className=''>Fortaleza</h3>

        </div>
        <div className='text-[#E04300] text-[20px] font-bold h-[24px] ml-[473px] pt-[8px] '>
            122 Casas para alugar em Fortaleza - CE
        </div>
        </>
    );
}

export default Breadcrumb;