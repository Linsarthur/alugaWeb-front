const PrecoDeAte = () => {
  return (
    <>
      <div className="p-[20px] border border-[#00000026] w-[370px] pb-[30px]">
        <form>
          <div className="flex gap-5">
            <div className="w-fit">
              <label className="text-[#595959] font-bold mt-[15px] mb-[15px]">
                Preços a partir de
              </label>
              <input
                type="number"
                className="bg-[#0000000D] h-[50px] pl-2 rounded w-[150px]"
                placeholder="0"
              ></input>
            </div>
            <div className="w-fit">
              <label className="text-[#595959] font-bold mt-[15px] mb-[15px]">
                Até
              </label>
              <input
                type="number"
                className="bg-[#0000000D] h-[50px] pl-2 rounded w-[150px]"
                placeholder="0"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PrecoDeAte;
