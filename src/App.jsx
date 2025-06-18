import AntProvider from "./contexts/AntContext";
import { FiltroProvider } from "./contexts/FiltroContext";
import UsuarioProvider from "./contexts/usuarioContext";
import Paths from "./routes/Paths";

function App() {
  return (
    <>
      <UsuarioProvider>
        <AntProvider>
          <FiltroProvider>
            <Paths />
          </FiltroProvider>
        </AntProvider>
      </UsuarioProvider>
    </>
  );
}

export default App;
