import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.scrollY > 800) {
        setShowButton(true);
      } else if (showButton && window.scrollY <= 800) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={showButton ? "visible" : "hidden"}>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-40 px-4 py-2 rounded-lg shadow-md bg-gray-800 text-gray-200"
      >
        back to top
      </button>
    </div>
  );
};

export default BackToTopButton;
