import React from "react";
import Project from "./Project";
// import logo from "../logo.svg";
import codeRefactoring from "../assets/week1_deployed_page.png";
import JATE from "../assets/JATE.png";
import socialMongoDB from '../assets/social_media_API.jpg';
import gittyup from "../assets/gittyup_square.png";
import blog_demo from "../assets/blog_demo.jpg";
import Ecommerce from '../assets/Ecommerce.png'
import employee_tracker from '../assets/employee_tracker.png'
import readMeGenerator from '../assets/readMeGenerator.png'
// import portfolioImg from '../assets/week1_deployed_page.png'

export default function Portfolio() {
  const compsciProjects = [
    {
      title: "This portfolio",
      imgLink: codeRefactoring,
      extLink: "",
      ghLink: "https://github.com/Gordon-Magill/react-portfolio",
      altText: "Representative shot of the current portfolio site",
    },
    {
      title: "PWA Service Worker Demo",
      imgLink: JATE,
      extLink: "https://glacial-wave-31818.herokuapp.com/",
      ghLink: "https://github.com/Gordon-Magill/PWA-Text-Editor",
      altText: "Just another text editor screenshot",
    },
    {
      title: "Social Media MongoDB API",
      imgLink: socialMongoDB,
      extLink: "",
      ghLink: "https://github.com/Gordon-Magill/social-media-mongoDB-api",
      altText: "Snapshot of Insomnia showing functionality of app",
    },
    {
      title: "GittyUp: Code sharing project",
      imgLink: gittyup,
      extLink: "https://tranquil-eyrie-15534.herokuapp.com/",
      ghLink: "https://github.com/Gordon-Magill/GittyUp",
      altText: "Snapshot of the gittyup project homepage",
    },
    {
      title: "Basic blog demo",
      imgLink: blog_demo,
      extLink: "https://lit-waters-47914.herokuapp.com/",
      ghLink: "https://github.com/Gordon-Magill/Blog-Demo",
      altText: "Snapshot of the blog demo",
    },
    {
      title: "E-Commerce Backend",
      imgLink: Ecommerce,
      extLink: "",
      ghLink: "https://github.com/Gordon-Magill/E-Commerce_Backend",
      altText: "Snapshot of e-commerce backend",
    },
    {
      title: "Basic mySQL content management system",
      imgLink: employee_tracker,
      extLink: "",
      ghLink: "https://github.com/Gordon-Magill/employee-tracker",
      altText: "Snapshot of CMS demo",
    },
    {
      title: "Simple README generator",
      imgLink: readMeGenerator,
      extLink: "",
      ghLink: "https://github.com/Gordon-Magill/readme_generator",
      altText: "alt text here",
    },
    {
      title: "My first, basic portfolio (obviously deprecated)",
      imgLink: codeRefactoring,
      extLink: "https://gordon-magill.github.io/personal_portfolio/",
      ghLink: "https://github.com/Gordon-Magill/personal_portfolio",
      altText: "alt text here",
    },
    {
      title: "Basic semantic code refactoring",
      imgLink: codeRefactoring,
      extLink: "https://gordon-magill.github.io/code_refactoring/",
      ghLink: "https://github.com/Gordon-Magill/code_refactoring",
      altText: "Baby's first code refactoring project",
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
