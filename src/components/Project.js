import React from "react";
// import logo from '../logo.svg'

export default function Project({ title, imgLink, extLink }) {
  console.log("imgLink:", imgLink);
  console.log("title:", title);
  return (
    <a className="w-20 h-20 rounded border-2 border-solid" href={extLink}>
      <p>{title}</p>
      <img src={imgLink}></img>
    </a>
  );
}
