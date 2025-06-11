import Navbar from "./components/Navbar";
import AntProvider from "./contexts/AntContext";

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
