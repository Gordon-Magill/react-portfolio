import React from "react";

export default function Nav({pages, setCurrentPage, currentPage}) {
  return (
      <ul className="m-1 p-1 text-xl text-white whitespace-nowrap">
        <li onClick={() => setCurrentPage(pages[0])} className={currentPage==='aboutMe' ? 'font-extrabold': ''}>
          About me
        </li>
        <li onClick={() => setCurrentPage(pages[1]) } className={currentPage==='portfolio' ? 'font-extrabold': ''}>
          Portfolio
        </li>
        <li onClick={() => setCurrentPage(pages[2])} className={currentPage==='contactMe' ? 'font-extrabold': ''}>
          Contact me
        </li>
        <li onClick={() => setCurrentPage(pages[3])} className={currentPage==='resume' ? 'font-extrabold': ''}>
          Resume
        </li>
      </ul>
  );
}
