import { BrowserRouter, Route, Routes } from "react-router";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pesquisa from "../pages/Pesquisa";
import SafePath from "./SafePath";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/pesquisa"
            element={
              <SafePath>
                <Pesquisa />
              </SafePath>
            }
          />
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
