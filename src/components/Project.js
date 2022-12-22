import React from "react";
import ghLogoDark from "../assets/github-mark.png";
// import logo from '../logo.svg'

export default function Project({ project }) {
  return (
    <div className="flex flex-col m-2 rounded max-w-sm relative ring ring-slate-500">
      <div className="relative">
        <p className="projectTitle">{project.title}</p>
        <img
          src={project.imgLink}
          alt={project.altText}
          className="rounded"
        ></img>
      </div>
      <div className="flex flex-row absolute bottom-0 right-0 bg-white/80 rounded-full m-1 items-center">
        <a href={project.extLink}>
          {" "}
          <img
            src={ghLogoDark}
            className="w-5 h-5 md:w-10 md:h-10 m-1"
            alt="github logo"
          ></img>
        </a>
        {project.extLink.length > 0 ? (
          <a
            className=" rounded-full m-2 p-1  ring ring-green-800 bg-green-400 hover:bg-green-500 focus:bg-green-600 text-xs md:text-base font-bold"
            href={project.ghLink}
          >
            Live page
          </a>
        ) : (
          <a
            className=" rounded-full m-2 p-1  ring ring-red-800 bg-red-400 hover:bg-red-500 text-xs md:text-base font-bold"
            href={project.ghLink}
          >
            No deployment
          </a>
        )}
      </div>
    </div>
  );
}
