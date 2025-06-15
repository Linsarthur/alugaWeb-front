import { createContext, useState } from "react";


export const usuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    const [logado,setLogado] = useState(false)

    return (

        <>
            <usuarioContext.Provider value={{logado, setLogado}}>
                {children}
            </usuarioContext.Provider>
        </>
    );
}
export default UsuarioProvider;