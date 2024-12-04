import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erro from "./pages/Erro";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Sobre from "./pages/Sobre";
import Cafe from "./pages/Cafe";
import Shop from "./pages/Shop";
import Contato from "./pages/Contato";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignIup";

function RouterApp() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;
