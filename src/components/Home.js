import React from "react";
import headshot from "../assets/headshotfranklinzhu.jpeg";
import {
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFolderOpen,
} from "react-icons/ai";

// buttons links
const buttons = [
  {
    icon: <AiFillMail />,
    name: "Email",
    link: "mailto:franklinzhu@g.ucla.edu",
  },
  {
    icon: <AiFillLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/franklinzhu/",
  },
  {
    icon: <AiFillGithub />,
    name: "GitHub",
    link: "https://github.com/frankz101",
  },
  {
    icon: <AiFillFolderOpen />,
    name: "Resume",
    link: "https://drive.google.com/file/d/1_iIrPaxzOsE6N5Y2dzMxEXyjuCQkI6Jb/view?usp=sharing",
  },
];

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-slate-800">
      <div className="max-w-screen-lg flex flex-col items-center justify-center mx-auto h-full px-4 md:flex-row">
        <img
          src={headshot}
          alt="headshotphoto"
          className="rounded-2xl mx-auto w-1/3 "
        />
        <div className="flex flex-col items-center justify-center py-4">
          <h2 className="text-5xl sm:text-7xl font-bold text-white flex">
            i'm franklin zhu
          </h2>
          <p className=" text-white py-4 sm:text-md max-w-md">
            welcome to my website! i'm an undergraduate student at ucla looking
            to become a software engineer in the future
          </p>
          <div
            name="button-list"
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2"
          >
            {/* map buttons to corresponding links */}
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className="text-white w-32 py-2 sm:py-3 my-2 mx-1 flex justify-center items-center rounded-md bg-sky-800 cursor-pointer hover:scale-105"
              >
                <div className="px-1">{button.icon}</div>

                {button.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
