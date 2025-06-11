import { Button, Form, Input } from "antd";

const FormCadastro = () => {
    return <>
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
    </>
}
 
export default FormCadastro;