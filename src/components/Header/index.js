import logo from "../../assets/img/logo-center.png";
import Menu from "../Menu";
import "./header.css";
function Header() {
  return (
    <header>
      <Menu />
      <div class="header">
        <div className="header__left">
          <h1>Café na Xícara</h1>
          <p>
            Bem-vindo à nossa cafeteria! Oferecemos uma experiência única para
            os amantes de café, com grãos selecionados, métodos de preparo
            especiais e um ambiente aconchegante. Seja para uma pausa rápida ou
            um encontro tranquilo, aqui você encontra o café perfeito para cada
            momento.
          </p>
        </div>
        <div class="header__right">
          <img src={logo} alt="logo do centro do site" />
        </div>
      </div>
    </header>
  );
}
export default Header;
