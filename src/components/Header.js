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
    <section className="px-4 py-2 flex bg-slate-600 justify-between items-center ring-8 ring-inset ring-red-600" id='header'>
      <p className="p-2 text-3xl font-bold text-center">Gordon Magill</p>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
}
