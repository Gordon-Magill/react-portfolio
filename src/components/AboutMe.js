import React from "react";
// import logo from '../logo.svg'
import profilePhoto from "../assets/profile_photo.jpeg";

export default function AboutMe() {
  const bioContent = `Hello!

    My name is Gordon Magill.

    I am an experienced engineer, developing developer, and  generally accomplished professional tinkerer.
    
    My goal is to be what no engineer nor developer can be alone; the engineering to know the right solution and the development skills to automate and deploy it.`;

  return (
    <section className="flex place-content-center" id="aboutMe">
      <div className="rounded bg-slate-800/50 m-2 p-2 w-fit block md:flex md:flex-row md:items-center">
        <img
          src={profilePhoto}
          className="rounded-full ring-8 m-4 ring-slate-800 float-left max-w-[125px] md:max-w-[300px]"
          alt="profile"
        ></img>
        <p className="m-6 whitespace-pre-line max-w-[300px] text-white font-bold font-sans">
          {bioContent}
        </p>
      </div>
    </section>
  );
}
