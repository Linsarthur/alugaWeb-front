import AntProvider from "./contexts/AntContext";
import UsuarioProvider from "./contexts/usuarioContext";
import Paths from "./Routes/Paths";


function App() {
  return (
    <>
      <UsuarioProvider>
        <AntProvider>
          <Paths />
        </AntProvider>
      </UsuarioProvider>
    </>
  );
}

export default App;
