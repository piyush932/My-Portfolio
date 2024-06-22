"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Project Intern, Nalco ",
    description1:
      "Developed a MERN stack React Form for seamless data storage and presentation, integrating user submissions with stored data and displaying submitted files",
    description2:
      "Implemented Multer for file uploads and included links for data viewing. Implemented a MongoDB pipeline to facilitate seamless data exchange between two distinct models within the application.",
    description3:
      "Managed multiple design aspects simultaneously, meeting deadlines and delivering high-quality work.",
    techstack: "MERN FullStack, React.js, Redux Express.js, Node.js, MongoDB, Multer",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Project Intern, Nalco
        <br /> Dec,23 - Jan,24
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
