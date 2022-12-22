import React from "react";
import resumePDF from "../assets/Gordon_Magill_Resume_2023.pdf";

export default function Resume() {
  return (
    <div className="h-100">
      <iframe
        title="Resume Jan 2023"
        src={resumePDF}
        height="100%"
        width="100%"
        className="aspect-auto"
      ></iframe>
    </div>
  );
}