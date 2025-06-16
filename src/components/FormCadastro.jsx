import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../contexts/usuarioContext";
import { AXIOS } from "../services";

const FormCadastro = () => {
  const navigate = useNavigate();
  const { setLogado } = useContext(LoginContext);


  const [formData, setFormData] = useState({
    usuario_nome: "",
    usuario_email: "",
    usuario_senha: "",
    usuario_telefone: "",
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await AXIOS.post("/usuarios", formData);

      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem(
          "usuario",
          JSON.stringify(response.data.usuario)
        );
        setLogado(true);
        navigate("/pesquisa");
      } else {
        alert(response.data.mensagem || "Erro ao cadastrar.");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro no servidor. Tente novamente mais tarde.");
    }
  }

  return (
    <div>
      <form className="w-[344px]" onSubmit={handleSubmit}>
        <label className="block mb-2 text-[#595959]">Nome</label>
        <input
          name="usuario_nome"
          value={formData.usuario_nome}
          onChange={handleChange}
          placeholder="Insira seu nome"
          type="text"
          className="p-2 mb-6 bg-gray-500/15 rounded-[8px] w-[344px] outline-transparent border border-[#D9D9D9]"
        />

        <label className="block mb-2 text-[#595959]">Email</label>
        <input
          name="usuario_email"
          value={formData.usuario_email}
          onChange={handleChange}
          placeholder="Insira seu email"
          type="email"
          className="p-2 mb-6 bg-gray-500/15 rounded-[8px] w-[344px] outline-transparent border border-[#D9D9D9]"
        />

        <label className="block mb-2 text-[#595959]">Senha</label>
        <input
          name="usuario_senha"
          value={formData.usuario_senha}
          onChange={handleChange}
          placeholder="********"
          type="password"
          className="p-2 mb-6 bg-gray-500/15 rounded-[8px] w-[344px] outline-transparent border border-[#D9D9D9]"
        />

        <label className="block mb-2 text-[#595959]">Telefone</label>
        <input
          name="usuario_telefone"
          value={formData.usuario_telefone}
          onChange={handleChange}
          placeholder="(ddd) 90000-0000"
          type="text"
          className="p-2 mb-6 bg-gray-500/15 rounded-[8px] w-[344px] outline-transparent border border-[#D9D9D9]"
        />
        <button
          type="submit"
          className="cursor-pointer w-[344px] mt-[29px] h-[50px] bg-[#E04300] rounded-[8px] text-[#FFFFFF]"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormCadastro;
