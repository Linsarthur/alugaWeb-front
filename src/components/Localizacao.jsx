const Localizacao = () => {
  return (
    <>
      <div className="p-[34px] border border-[#00000026] w-fit">
        <form>
          <label className="flex flex-col text-[#595959] font-bold">
            Localização
          </label>
          <input
            type="text"
            name=""
            id=""
            className="px-[34px] mt-3 bg-gray-500/15 w-[300px] h-[50px] rounded-2xl border border-[#00000026] focus:outline-[#E04300]"
            placeholder="Digite o bairro rua ou cidade"
          />
        </form>

        <div className="flex mt-5 py-2.5 bg-[#E04300] text-white rounded-2xl px-[20px] font-bold text-[12px] w-fit">
          <button className=""> Fortaleza-CE </button>
          <box-icon name="x" color="#ffffff"></box-icon>
        </div>
      </div>
    </>
  );
};

export default Localizacao;
