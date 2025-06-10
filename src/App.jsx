import Navbar from "./components/Navbar";
import AntProvider from "./contexts/AntContext";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <AntProvider>
        <Navbar />
      </AntProvider>
    </>
  );
}

export default App;
