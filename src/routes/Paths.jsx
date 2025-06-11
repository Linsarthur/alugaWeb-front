import { BrowserRouter, Route, Routes } from "react-router";
import Cadastro from "../pages/Cadastro";
import Testes from "../pages/testes";
import Home from "../pages/home";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/cadastro" element={<Cadastro />} />
          {/* <Route path="/pesquisa" element={<Pesquisa />} /> */}
          <Route path="/testes" element={<Testes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
