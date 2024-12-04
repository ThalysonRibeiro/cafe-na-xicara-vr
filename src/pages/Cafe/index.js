import Pesquisa from "../../components/Pesquisa";
import Footer from "../../components/Footer";

import "./cafe.css";
import ScrollToTopButton from "../../components/ScrollToTopButton";
function Cafe() {
  return (
    <div className="container__cafe">
      <ScrollToTopButton />
      <Pesquisa />
      <Footer />
    </div>
  );
}
export default Cafe;
