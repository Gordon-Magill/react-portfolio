import React from "react";
// import logo from '../logo.svg'

export default function Project({ project}) {
  // console.log("imgLink:", project.imgLink);
  // console.log("title:", project.title);
  return (
    <a className="flex flex-col rounded border-2 border-solid max-w-sm" href={project.extLink}>
      <p className="text-center">{project.title}</p>
      <img src={project.imgLink} alt={project.altText}></img>
      <a>Github</a>
      <a>Deployed</a>
    </a>
  );
}
