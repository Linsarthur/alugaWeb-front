import { baseUrl } from "../api/index.js"


export async function useBuscarImoveis() {
    try {
        const response = await baseUrl.get("/usuarios")
        console.log(response)
        return response.data
    } catch (error) {
        return error.message
    }
}
export async function useBuscarUmImovel(dados) {
    try {
        const response = await baseUrl.get(`/usuarios/:${dados.imovel_id}`)
        console.log(response)
        return response.data
    } catch (error) {
        return error.message
    }
}

export async function useCriarImoveis(dados) {
    try {
        const response = await baseUrl.post("/usuarios", dados)
        console.log(response);
        return response.data
        //chamar função de buscar usuário?
    } catch (error) {
        return error.message
    }
}
export async function useEditarImoveis(dados) {
    try {
        const response = await baseUrl.post(`/usuarios/:${dados.imovel_id}`, dados)
        console.log(response);
        return response.data
        //chamar função de buscar usuários?
    } catch (error) {
        return error.message
    }
}
export async function useDeletarImoveis(dados) {
    try {
        const response = await baseUrl.post(`/usuarios/:${dados.imovel_id}`)
        console.log(response);
        return response.data
        //chamar função de buscar usuários?p
    } catch (error) {
        return error.message
    }
}