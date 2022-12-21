import React from "react";
import Project from "./Project";
import logo from "../logo.svg";
import firstProject from '../assets/week1_deployed_page.png'


export default function Portfolio() {

  const compsciProjects = [
    {
      title: "Baby's first code refactoring",
      imgLink: firstProject,
      extLink: "https://gordon-magill.github.io/code_refactoring/",
      altText: "Baby's first code refactoring project"
    },
    {
      title: "Project B",
      imgLink: logo,
      extLink: "#",
      altText: 'alt text here'
    },
    {
      title: "Project C",
      imgLink: logo,
      extLink: "#",
      altText: 'alt text here'
    },
    {
      title: "Project D",
      imgLink: logo,
      extLink: "#",
      altText: 'alt text here'
    },
    {
      title: "Project E",
      imgLink: logo,
      extLink: "#",
      altText: 'alt text here'
    },
    {
      title: "Project F",
      imgLink: logo,
      extLink: "#",
      altText: 'alt text here'
    },
  ];

  return (
    <section className="w-screen" id="portfolioHighlights">
      <div className="grid rounded m-2 p-2 bg-orange-400 grid-cols-2 gap-4 place-content-center justify-items-center">
        {compsciProjects.map((project, index) => {
          // console.log(project);
          return <Project project={project} key={index}/>;
        })}
      </div>
    </section>
  );
}
