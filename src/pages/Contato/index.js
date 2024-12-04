import { useState } from "react";
import "./contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleNomeChange(e) {
    setNome(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMensagemChange(e) {
    setMensagem(e.target.value);
  }

  function handleSubmit(e) {
    // e.preventDefault();
    alert(
      `Dados enviados:\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    );
  }

  return (
    <div className="container__contato">
      <div className="container__form">
        <h2>Entre em contato</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nome}
            onChange={handleNomeChange}
            name="nome"
            placeholder="Nome"
            required
          />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            value={mensagem}
            onChange={handleMensagemChange}
            name="mensagem"
            rows={10}
            placeholder="Mensagem"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
