import React from "react";
import Project from "./Project";
// import logo from "../logo.svg";
import firstProject from "../assets/week1_deployed_page.png";
// import portfolioImg from '../assets/week1_deployed_page.png'

export default function Portfolio() {
  const compsciProjects = [
    {
      title: "Basic semantic code refactoring",
      imgLink: firstProject,
      extLink: "https://gordon-magill.github.io/code_refactoring/",
      ghLink: "",
      altText: "Baby's first code refactoring project",
    },
    {
      title: "This portfolio",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
    {
      title: "PWA Service Worker Demo",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
    {
      title: "Legacy Tech: Handlebars for social media site",
      imgLink: firstProject,
      extLink: "",
      altText: "alt text here",
    },
    {
      title: "Legacy Tech: Handlebars for blog",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
    {
      title: "E-Commerce Backend Demo",
      imgLink: firstProject,
      extLink: "",
      altText: "alt text here",
    },
    {
      title: "Content Management System (CMS) Demo",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
    {
      title: "Javascript day planner",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
    {
      title: "Raw HTML, CSS, JS",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
    {
      title: "Simple README generator",
      imgLink: firstProject,
      extLink: "",
      ghLink: "",
      altText: "alt text here",
    },
  ];

  return (
    <section className="w-screen flex justify-center" id="portfolioHighlights">
      <div className="xs:flex xs:flex-col md:grid rounded m-2 p-2 bg-orange-400 md:grid-cols-2 md:gap-4 place-content-center justify-center items-center">
        {compsciProjects.map((project, index) => {
          // console.log(project);
          return <Project project={project} key={index} />;
        })}
      </div>
    </section>
  );
}
