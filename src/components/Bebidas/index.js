import { useState } from "react";
import "./bebidas.css";
import bebidasDeCafe from "../../dados/bebidas";

function Bebidas() {
  const [bebidas, setBebidas] = useState(bebidasDeCafe);
  return (
    <div className="container__bebidas">
      <h2>Tipos de Bebidas</h2>
      <div className="bebidas">
        {bebidas.map((item) => (
          <div className="card__bebidas" key={item.nome}>
            <div className="image__bebida">
              <img src={item.imagem} alt={item.nome} />
            </div>
            <ul>
              <li>
                <strong>Nome: </strong>
                {item.nome}
              </li>
              <li>
                <strong>Ingredientes: </strong>
                {item.ingredientes}
              </li>
              <li>
                <strong>Preparo: </strong>
                {item.preparo}
              </li>
              <li>
                <strong>Base: </strong>
                {item.base}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Bebidas;
