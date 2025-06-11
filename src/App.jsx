import AntProvider from "./contexts/AntContext";
import Paths from "./routes/Paths";

function App() {
  return (
    <>
      <AntProvider>
        <Paths />
      </AntProvider>
    </>
  );
}

export default App;
