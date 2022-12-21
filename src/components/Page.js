import React from "react";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

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
    }
  };

  return (
  <section id="pageBody">
    {pageSelector()}
  </section>);
}
