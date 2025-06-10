import AntProvider from "./contexts/AntContext";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <AntProvider>
        <Cadastro />
      </AntProvider>
    </>
  );
}

export default App;
