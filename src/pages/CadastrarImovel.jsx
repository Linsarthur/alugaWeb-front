import { useState } from "react";
import casinha from "../assets/casinha.png";
import { AXIOS } from "../services";

const CadastrarImovel = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }

    try {
      const response = await AXIOS.post("/imoveis", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Imóvel cadastrado:", response.data);
      alert("Imóvel cadastrado com sucesso!");
    } catch (error) {
      console.error(
        "❌ Erro ao cadastrar:",
        error.response?.data || error.message
      );
      alert("Erro ao cadastrar o imóvel.");
    }
  };
  return (
    <div className="flex items-center h-fit flex-col">
      <div className="border-[1px] border-gray-500/20 rounded shadow px-7 pt-10 pb-7 mt-[133px]">
        <div className="flex justify-center items-center gap-4">
          <div className="pb-[50px]">
            <box-icon name="left-arrow-alt" color="#e04300"></box-icon>
          </div>
          <div className="flex justify-center items-center gap-4 pb-[50px]">
            <div className="w-[40px] h-[40px] bg-[#E04300] rounded flex justify-center items-center">
              <img src={casinha} alt="logo" />
            </div>
            <h2 className="text-[rgb(223,67,0)] font-bold">Aluga Web</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block mb-2">Estado</label>
            <input
              type="text"
              name="imovel_estado"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
              placeholder="Inserir dados"
            />
          </div>
          <div>
            <label className="block mb-2">Cidade</label>
            <input
              type="text"
              name="imovel_cidade"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Bairro</label>
            <input
              type="text"
              name="imovel_bairro"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Logradouro</label>
            <input
              type="text"
              name="imovel_logradouro"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Número</label>
            <input
              type="text"
              name="imovel_numero"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Complemento</label>
            <input
              type="text"
              name="imovel_complemento"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">CEP</label>
            <input
              type="text"
              name="imovel_cep"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Tipo (Casa/Apartamento)</label>
            <input
              type="text"
              name="imovel_tipo"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Modalidade (Venda/Aluguel)</label>
            <input
              type="text"
              name="imovel_modalidade"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Valor do Imóvel</label>
            <input
              type="number"
              name="imovel_valor"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Valor do Condomínio</label>
            <input
              type="number"
              name="imovel_valor_condominio"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Quartos</label>
            <input
              type="number"
              name="imovel_quartos"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Banheiros</label>
            <input
              type="number"
              name="imovel_banheiros"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Garagens</label>
            <input
              type="number"
              name="imovel_garagens"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Área (m²)</label>
            <input
              type="number"
              name="imovel_area"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Contato 1</label>
            <input
              type="text"
              name="imovel_contato1"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Contato 2</label>
            <input
              type="text"
              name="imovel_contato2"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Descrição</label>
            <textarea
              name="imovel_descricao"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2 w-full"
              rows={3}
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Imagem do Imóvel</label>
            <input
              type="file"
              name="imovel_imagem"
              onChange={handleChange}
              className="bg-[#00000010] rounded p-2 w-full"
              accept="image/*"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-[#E04300] text-white py-2 px-4 rounded font-bold w-full"
            >
              Cadastrar Imóvel
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 pb-5 text-[#E04300] font-bold">
        <h6>Aluga web, todos os direitos reservados.</h6>
      </div>
    </div>
  );
};

export default CadastrarImovel;
