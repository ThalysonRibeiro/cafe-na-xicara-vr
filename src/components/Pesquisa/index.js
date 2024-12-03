import { useState } from "react";
import tiposDeCafe from "../../dados/tiposDeCafe";
import "./resultado-pesquisa.css";

function Pesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [cafesFiltrados, setCafesFiltrado] = useState(tiposDeCafe);

  function realizarPesquisa(termo) {
    const termoLowerCase = termo.trim().toLowerCase();

    const cafesEncontrados = tiposDeCafe.filter((cafe) => {
      const {
        tipo,
        sabor,
        caracteristicas,
        origem,
        torraIdeal,
        metodosPreparo,
      } = cafe;
      return [
        tipo,
        sabor,
        caracteristicas,
        origem,
        torraIdeal,
        metodosPreparo,
      ].some((valor) => valor.toLowerCase().includes(termoLowerCase));
    });

    setCafesFiltrado(cafesEncontrados);
  }
  return (
    <div className="container-pesquisa">
      <div className="pesquisa">
        <input
          type="text"
          placeholder="Pesquisa sobre café"
          value={termoPesquisa}
          onChange={(e) => {
            const novoTermo = e.target.value;
            setTermoPesquisa(novoTermo);
            realizarPesquisa(novoTermo);
          }}
        />
      </div>
      <div className="resultado__pesquisa">
        {cafesFiltrados.length === 0 ? (
          <p>Nenhum resultado encontrado para "{termoPesquisa}"</p>
        ) : (
          <div className="container__card">
            {cafesFiltrados.map((item) => (
              <div className="card__item" key={item.id}>
                <img src={item.image} alt={item.tipo} />
                <ul>
                  <li>
                    <strong>Tipo: </strong>
                    {item.tipo}
                  </li>
                  <li>
                    <strong>Sabor: </strong>
                    {item.sabor}
                  </li>
                  <li>
                    <strong>Caracteristicas: </strong>
                    {item.caracteristicas}
                  </li>
                  <li>
                    <strong>Origem: </strong>
                    {item.origem}
                  </li>
                  <li>
                    <strong>Torra ideal: </strong>
                    {item.torraIdeal}
                  </li>
                  <li>
                    <strong>Metodo de preparo: </strong>
                    {item.metodosPreparo}
                  </li>
                  <li>
                    <strong>Notas de degustação: </strong>
                    {item.notasDeDegustacao}
                  </li>
                  <li>
                    <a href={item.link} target="blank">
                      Mais infomações &rarr;
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Pesquisa;
