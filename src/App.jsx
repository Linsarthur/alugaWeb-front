import AntProvider from "./contexts/AntContext";
import Paths from "./Routes/Paths";


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
