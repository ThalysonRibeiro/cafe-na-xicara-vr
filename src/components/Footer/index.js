import "./footer.css";

function Footer() {
  return (
    <div className="container-informacao">
      <div className="github">
        <a
          href="https://github.com/ThalysonRibeiro/cafe-na-xicara"
          target="blank"
        >
          <i className="bi bi-github"></i> Repositório
        </a>
        <a href="https://github.com/ThalysonRibeiro" target="blank">
          <i className="bi bi-github"></i> ThalysonRibeiro
        </a>
      </div>
      <div>
        <p>Entre em contato: pelo emal: rafinha.head@gmail.com</p>
        <p>©2024 - Café na Xícara. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
export default Footer;
