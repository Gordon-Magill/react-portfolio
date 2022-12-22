import React from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

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
    }
  };

  return (
  <section id="pageBody">
    {pageSelector()}
  </section>);
}
