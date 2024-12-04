import { useState } from "react";
import Footer from "../../components/Footer";
import "./shop.css";
import arrayLoja from "../../dados/shop";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Shop() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [itensFiltrados, setItensFiltrados] = useState(arrayLoja);

  function realizarPesquisaShop(termo) {
    const termoLowerCase = termo.trim().toLowerCase();

    const itensDaLojaEncontrados = arrayLoja.filter((itensDoArrayLoja) => {
      const { nome, marca, preco } = itensDoArrayLoja;

      return [nome, marca, preco].some((valor) =>
        valor.toLowerCase().includes(termoLowerCase),
      );
    });

    setItensFiltrados(itensDaLojaEncontrados);
  }

  return (
    <div className="container__shop">
      <ScrollToTopButton />
      <div className="container__pesquisa__shop">
        <div className="pesquisa__shop">
          <input
            type="text"
            placeholder="Pesquisa sobre café"
            value={termoPesquisa}
            onChange={(e) => {
              const novoTermo = e.target.value;
              setTermoPesquisa(novoTermo);
              realizarPesquisaShop(novoTermo);
            }}
          />
        </div>
        <div className="resultado__pesquisa__shop">
          {itensFiltrados.length === 0 ? (
            <p>Nenhum resultado encontrado para "{termoPesquisa}"</p>
          ) : (
            <div className="container__card__shop">
              {itensFiltrados.map((item) => (
                <div className="card__item__shop" key={item.id}>
                  <img src={item.image} alt={item.nome} />
                  <ul>
                    <li className="nome">{item.nome}</li>
                    <li>{item.marca}</li>
                    <li className="preco">{item.preco}</li>
                    <li>{item.parcelamento}</li>
                  </ul>
                  <a
                    className="link__compra"
                    href={item.linkDeCompra}
                    target="blank"
                  >
                    Comprar
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Shop;
