import { BrowserRouter, Route, Routes } from "react-router";
import Cards from "../components/Cards";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";



const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/cadastro" element={<Cadastro />} />
          {/* <Route path="/pesquisa" element={<Pesquisa />} /> */}
          <Route path="/testes" element={<Cards />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
