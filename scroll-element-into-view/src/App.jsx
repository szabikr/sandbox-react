import { useRef } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const expertiseSectionRef = useRef(null);
  const blogSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <>
      <Header
        expertiseSectionRef={expertiseSectionRef}
        blogSectionRef={blogSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <Main
        expertiseSectionRef={expertiseSectionRef}
        blogSectionRef={blogSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <Footer />
    </>
  );
}

export default App;
