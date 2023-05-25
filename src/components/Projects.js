import React from "react";
import photo from "../assets/headshotfranklinzhu.jpeg";
import ProjectSlider from "./ProjectSlider";

const Projects = () => {
  return (
    <div name="projects" className="bg-slate-800 w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <ProjectSlider />
      </div>
    </div>
  );
};

export default Projects;
