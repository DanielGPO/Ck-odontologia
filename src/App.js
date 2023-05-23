import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Components/Navbar";
import Serviços from "./pages/Serviços";
import SobreNos from "./pages/SobreNos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serviços" element={<Serviços />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </>
  );
}

export default App;
