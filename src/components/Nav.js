import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-between p-4 bg-slate-600 w-screen place-items-center">
      <p className="m-1 p-1 text-4xl">Gordon Magill</p>

      <ul className="m-1 p-1 text-xl">
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Full Stack Development</a>
        </li>
        <li>
          <a href="#">Chemical Engineering</a>
        </li>
      </ul>
    </div>
  );
}
