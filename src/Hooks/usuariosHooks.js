import { baseUrl } from "../api/index.js"


export async function useBuscarUsuario() {
    try {
        const response = await baseUrl.get("/usuarios")
        console.log(response)
        return response.data
    } catch (error) {
        return error.message
    }
}

export async function useCriarUsuario(dados) {
    try {
        const response = await baseUrl.post("/usuarios", dados)
        console.log(response);
        return response.data
    } catch (error) {
        return error.message
    }
}
export async function useEditarUsuario(dados) {
    try {
        const response = await baseUrl.post(`/usuarios/:${dados.usuario_id}`, dados)
        console.log(response);
        return response.data
    } catch (error) {
        return error.message
    }
}
export async function useDeletarUsuario(dados) {
    try {
        const response = await baseUrl.post(`/usuarios/:${dados.usuario_id}`)
        console.log(response);
        return response.data
    } catch (error) {
        return error.message
    }
}