import { Button, Form, Input } from "antd";

const FormCadastro = () => {
  return (
    <>
      <div className="">
        <Form layout="vertical" className="w-[344px]">
          <Form.Item
            className="font-bold"
            label="Nome"
            name="usuario_nome"
            rules={[{ required: true, message: "Campo obrigatorio!" }]}
          >
            <Input
              placeholder="Seu nome aqui"
              className="h-[54px] w-full bg-"
              variant="filled"
            />
          </Form.Item>

          <Form.Item
            className="font-bold"
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
            className="font-bold"
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
          <Button
            color="primary"
            variant="solid"
            className="!py-[18px] w-full"
          >
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormCadastro;
