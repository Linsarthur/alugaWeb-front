import AntProvider from "./contexts/AntContext";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/home";

function App() {
  return (
    <>
      <AntProvider>
        <Home />
      </AntProvider>
    </>
  );
}

export default App;
