import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Erro from "./pages/Erro";

function RouterApp() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RouterApp;