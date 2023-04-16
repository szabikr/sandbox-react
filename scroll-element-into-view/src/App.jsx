import { useRef } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const mainRef = useRef(null);

  const handleNavItemClick = (itemId) => {
    history.pushState({}, "", `#${itemId}`);
    mainRef.current[itemId].scrollIntoView();
  };

  return (
    <>
      <Header onNavItemClick={handleNavItemClick} />
      <Main ref={mainRef} />
      <Footer />
    </>
  );
}

export default App;
