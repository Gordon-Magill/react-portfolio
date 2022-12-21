import React from "react";
import Nav from './Nav'

export default function Header({darkMode, toggleDarkMode, pages, setCurrentPage, currentPage}) {
  // darkMode={darkMode}
  // toggleDarkMode={toggleDarkMode}
  // pages={pages}
  // setCurrentPage={setCurrentPage}
  // currentPage={currentPage}

  // "aboutMe", "portfolio", "contactMe"


  return (
    <section className="flex justify-between p-4 bg-slate-600 w-screen place-items-center ring ring-inset ring-slate-800" id='navBar'>
      <p className="m-2 p-1 text-4xl">Gordon Magill</p>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
}
