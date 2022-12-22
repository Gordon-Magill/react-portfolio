import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="w-screen ">
      <div className="fixed bottom-0 bg-slate-400 w-screen text-center text-white z-20 flex justify-center items-center">
        <p className="text-white p-1">
          &copy; Gordon Magill 2022
        </p>
        <a className="p-1" href="https://github.com/Gordon-Magill">Github</a>
        <a className="p-1" href="https://www.linkedin.com/in/gordon-magill-3b029a47/">
          LinkedIn
        </a>
        <a className="p-1" href="https://twitter.com/GordonMagill">Twitter</a>
      </div>
    </section>
  );
}
