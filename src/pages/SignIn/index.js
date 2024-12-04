import { useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="container__signin">
      <div className="container__form__signin">
        <h2>Conecte-se</h2>
        <form>
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
            Não tem uma conta?
            <Link to="/signup" className="signin__link">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
