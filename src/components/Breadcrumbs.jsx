import iconesc from'../assets/icone-setacinza.png';

const Breadcrumb = () => {
    return ( 
        <>
        <div>
            <h3>Casas para alugar</h3>
            <img
            src={iconesc}
            alt=""
            className=""/>
            <h3>CE</h3>
            <img
            src={iconesc}
            alt=""
            className=""/>
            <h3>Fortaleza</h3>

        </div>
        <div>
            122 Casas para alugar em Fortaleza - CE
        </div>
        </>
    );
}

export default Breadcrumb;