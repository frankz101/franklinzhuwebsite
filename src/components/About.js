import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white bg-slate-800 p">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg mt-10 sm:text-xl">
          I am planning to study Computer Science and Mathematics here at the
          University of California, Los Angeles. I grew up with a competitive
          sports background, having played golf at the national level for over a
          decade. I have drive to become my best self at any endeavor I choose
          to follow, and I am currently exploring my passion in computer
          science. I am captivated in its potential to create impactful
          solutions that can transform my community, and I plan to continue to
          find opportunities in hopes of becoming a software engineer after
          college.
        </p>
      </div>
    </div>
  );
};

export default About;
