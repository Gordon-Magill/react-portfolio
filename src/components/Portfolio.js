import React from "react";
import Project from './Project'

export default function Portfolio({ projects, darkMode }) {
    console.log(projects)
  return (
    <section className="w-screen">
      <div className="flex rounded m-2 p-2 bg-orange-400 place-content-center ">
        {projects.map((project) => {
            console.log(project)
            return (
            <Project project={project}/>
        )})}
      </div>
    </section>
  );
}
