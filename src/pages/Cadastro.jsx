import { Button, Form, Input } from "antd";
import casinha from "../assets/casinha.png";
const Cadastro = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col relative">
        <div className="border-[1px] border-gray-500/20 rounded shadow pt-[40px] pb-[40px] px-[28px] ">
          <div className="flex items-center gap-[75px] pr-[124px]">
            <div className="pb-[50px] ">
              <box-icon name="left-arrow-alt" color="#e04300"></box-icon>
            </div>
            <div className="flex items-center gap-4 pb-[50px]">
              <div className="w-[40px] h-[40px] bg-[#E04300] rounded flex justify-center items-center">
                <img src={casinha} alt="" className="p-[6px]" />
              </div>
              <div>
                <h2 className="text-[#DF4300] font-bold ">Aluga Web</h2>
              </div>
            </div>
          </div>
          <div>
            <Form layout="vertical">
              <Form.Item
                label="Nome"
                name="usuario_nome"
                rules={[{ required: true, message: "Campo obrigatorio!" }]}
              >
                <Input
                  placeholder="Seu nome aqui"
                  className="h-[54px] w-[344px]"
                  variant="filled"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="usuario_email"
                rules={[{ required: true, message: "Campo obrigatorio!" }]}
              >
                <Input
                  placeholder="email@gmail.com"
                  className="h-[54px]"
                  variant="filled"
                />
              </Form.Item>

              <Form.Item
                label="Senha"
                name="usuario_senha"
                rules={[{ required: true, message: "Campo obrigatorio!" }]}
              >
                <Input
                  placeholder="Senha aqui"
                  className="h-[54px]"
                  variant="filled"
                />
              </Form.Item>
              <Button color="primary" variant="solid" className="w-full">
                Enviar
              </Button>
            </Form>
          </div>
        </div>
        <div className="absolute bottom-10 text-[#E04300] font-bold">
          <h6>Aluga web, todos os direitos reservados.</h6>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
