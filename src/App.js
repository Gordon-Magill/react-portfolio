import React, { useState } from "react";
// import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";
// import Hero from "./components/Hero";
// import Portfolio from "./components/Portfolio";
// import AboutMe from "./components/AboutMe";

function App() {
  const [darkMode, toggleDarkMode] = useState();
  const [pages] = useState(["aboutMe", "portfolio", "contactMe", "resume"]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='max-w-screen'>
      <Header
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
