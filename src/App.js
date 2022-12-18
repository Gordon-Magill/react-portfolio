import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import { useState } from "react";

function App() {

  const [darkMode, toggleDarkMode] = useState()


  const compsciProjects = [
    {
      title: "Project A",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project B",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project C",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project D",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project E",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project F",
      imgLink: logo,
      extLink: "#",
    },
  ];

  const chemEProjects = [
    {
      title: "Project A",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project B",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project C",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project D",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project E",
      imgLink: logo,
      extLink: "#",
    },
    {
      title: "Project F",
      imgLink: logo,
      extLink: "#",
    },
  ];

  return (
    <div className="">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <Portfolio projects={compsciProjects} darkMode={darkMode}/>
      <Portfolio projects={chemEProjects} darkMode={darkMode}/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
