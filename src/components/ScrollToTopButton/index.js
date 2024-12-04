import { useEffect, useState } from "react";
import "./scrollToTop.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    function toggleVisibility() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="back__up"
      onClick={scrollToTop}
      aria-label="Rolar para o topo"
    >
      &#8593;
    </div>
  );
}

export default ScrollToTopButton;
