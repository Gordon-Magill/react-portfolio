import React from "react";

export default function Nav({darkMode, toggleDarkMode, pages, setCurrentPage, currentPage}) {
  // darkMode={darkMode}
  // toggleDarkMode={toggleDarkMode}
  // pages={pages}
  // setCurrentPage={setCurrentPage}
  // currentPage={currentPage}

  // "aboutMe", "portfolio", "contactMe"


  return (
    <section className="flex justify-between p-4 bg-slate-400 w-screen place-items-center" id='navBar'>
      <p className="m-1 p-1 text-4xl">Gordon Magill</p>

      <ul className="m-1 p-1 text-xl">
        <li onClick={() => setCurrentPage(pages[0])} className={currentPage==='aboutMe' ? 'font-bold': ''}>
          About me
        </li>
        <li onClick={() => setCurrentPage(pages[1]) } className={currentPage==='portfolio' ? 'font-bold': ''}>
          Portfolio
        </li>
        <li onClick={() => setCurrentPage(pages[2])} className={currentPage==='contactMe' ? 'font-bold': ''}>
          Contact me
        </li>
        <li onClick={() => setCurrentPage(pages[3])} className={currentPage==='resume' ? 'font-bold': ''}>
          Resume
        </li>
      </ul>
    </section>
  );
}
