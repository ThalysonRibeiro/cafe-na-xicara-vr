import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleNomeChange(e) {
    setNome(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="container__signup">
      <div className="container__form__signup">
        <h2>Cadastre-se</h2>
        <form>
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
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            name="senha"
            placeholder="Senha"
            required
          />
          <button type="submit">Entrar</button>
          <p>
            Já possue tem uma conta?
            <Link to="/signin" className="signup__link">
              Conecte-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
