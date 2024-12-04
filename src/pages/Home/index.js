import Header from "../../components/Header";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Home() {
  return (
    <div>
      <ScrollToTopButton />
      <Header />
      <Article />
      <Footer />
    </div>
  );
}
export default Home;
