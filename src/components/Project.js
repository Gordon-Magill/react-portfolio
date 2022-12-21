import React from "react";
import ghLogoDark from "../assets/github-mark.png";
// import logo from '../logo.svg'

export default function Project({ project }) {

  return (
    <div className="flex flex-col rounded max-w-sm ring ring-slate-800 relative">
      <div className='relative'>
        <p className="text-center absolute right-[50%] top-[50%] translate-x-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full shadow-lg backdrop-blur-sm">
          {project.title}
        </p>
        <img src={project.imgLink} alt={project.altText}></img>
      </div>
      <div className="flex flex-row absolute bottom-0 right-0 bg-white/40 rounded-full m-1 items-center">
        <a href={project.extLink}>
          {" "}
          <img
            src={ghLogoDark}
            className="w-10 h-10 m-1"
            alt="github logo"
          ></img>
        </a>
        {project.extLink.length > 0 ? (
          <a
            className=" rounded-full m-1 p-1  ring ring-green-800 bg-green-400 hover:bg-green-500 focus:bg-green-600 font-bold"
            href={project.ghLink}
          >
            Live page
          </a>
        ) : (
          <a
            className=" rounded-full m-1 p-1  ring ring-red-800 bg-red-400 hover:bg-red-500 font-bold"
            href={project.ghLink}
          >
            No deployment
          </a>
        )}
      </div>
    </div>
  );
}
