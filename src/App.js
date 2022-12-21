import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
// import Hero from "./components/Hero";
// import Portfolio from "./components/Portfolio";
// import AboutMe from "./components/AboutMe";
import { useState } from "react";

function App() {
  const [darkMode, toggleDarkMode] = useState();
  const [pages] = useState(["aboutMe", "portfolio", "contactMe", "resume"]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div className="container w-screen">
      <Nav
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <Page currentPage={currentPage} />

      <Footer />
    </div>
  );
}

export default App;
