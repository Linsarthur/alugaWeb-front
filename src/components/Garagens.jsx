const Garagens = () => {
  return (
    <>
      <div className="p-[20px] border border-[#00000026] w-[370px] pb-[30px]">
        <form>
          <div className="">
            <label className="text-[#595959] font-bold mt-[15px] mb-[15px]">
              Garagens
            </label>
          </div>
          <div className="flex gap-5 pt-5">
            <button className="bg-[#E04300] cursor-pointer text-white px-4 py-2 rounded">
              +1
            </button>
            <button className="bg-[#E0430033] text-[#E04300B2] cursor-pointer px-4 py-2 rounded">
              +2
            </button>
            <button className="bg-[#E0430033] text-[#E04300B2] cursor-pointer px-4 py-2 rounded">
              +3
            </button>
            <button className="bg-[#E0430033] text-[#E04300B2] cursor-pointer px-4 py-2 rounded">
              +4
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Garagens;
