import React from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Resume from "./Resume";
// import jwst_background from '../assets/jwst_background.jpg'

export default function Page({ currentPage }) {
  const pageSelector = () => {
    // "aboutMe", "portfolio", "contactMe"
    switch (currentPage) {
      case "aboutMe":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contactMe":
        return <ContactMe />;
      case "resume":
        return <Resume />
      default:
        return <AboutMe />;
    }
  };

  return (
  <div id="pageBody" className="bg-fixed bg-cover bg-top pageBackground min-h-fit h-screen">
    {pageSelector()}
  </div>);
}
