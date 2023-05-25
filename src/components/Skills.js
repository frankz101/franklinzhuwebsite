import React from "react";
import html from "../assets/headshotfranklinzhu.jpeg";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMui, SiMongodb } from "react-icons/si";

const Skills = () => {
  // list of technology icons
  const techList = [
    {
      icon: <AiFillHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
    },
    {
      icon: <SiJavascript />,
      title: "Javascript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind",
    },
    {
      icon: <SiMui />,
      title: "Material UI",
    },
    {
      icon: <FaNodeJs />,
      title: "NodeJS",
    },
    {
      icon: <SiMongodb />,
      title: "Mongodb",
    },
  ];

  return (
    <div name="skills" className="bg-slate-800 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-10 px-12 sm:px-0">
          {techList.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg py-2 hover:scale-105 duration-500 flex justify-center"
            >
              <div className="sm:text-9xl text-7xl">{tech.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
