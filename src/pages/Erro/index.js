import { Link } from "react-router-dom";
import "./erro.css";
function Erro() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Pagina não encontrada</h2>
      <Link to="/">Veja todos os Tipos de bebida com café!</Link>
    </div>
  );
}
export default Erro;
