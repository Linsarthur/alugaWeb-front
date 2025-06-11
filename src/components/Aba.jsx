import { Button, Space } from "antd";
import { useEffect, useState } from "react";

const Aba = () => {
  const [select, setSelect] = useState(false);

  function handleClick() {
    setSelect = true;
  }

  useEffect(() => {
    setSelect((prev) => !prev);
  }, []);
  return (
    <>
      <div className="w-[300px] h-[1000px] bg-red-950 flex items-center flex-col p-5">
        <Space.Compact className="w-full justify-center">
          <Button>Comprar</Button>
          <Button>Alugar</Button>
        </Space.Compact>
      </div>
    </>
  );
};

export default Aba;
