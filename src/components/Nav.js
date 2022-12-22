import React from "react";

export default function Nav({pages, setCurrentPage, currentPage}) {
  return (
      <ul className="m-1 p-1 text-xl whitespace-nowrap">
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
  );
}
