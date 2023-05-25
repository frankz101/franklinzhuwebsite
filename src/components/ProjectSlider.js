import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import golfScoreTracker from "../assets/golfscoretracker.jpeg";
import expenseTracker from "../assets/expensetracker.png";
import personalPortfolio from "../assets/personalportfolio.png";

const slides = [golfScoreTracker, expenseTracker, personalPortfolio];
const links = [
  "https://github.com/frankz101/golfhandicaptracker",
  "https://github.com/frankz101/expensetracker",
  "https://github.com/frankz101/franklinzhuwebsite",
];

const ProjectSlider = () => {
  // slide counter
  const [currentIndex, setCurrentIndex] = useState(0);

  //set current index to previous index
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  //set current index to next index
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="flex py-8">
      <div>
        <div className="flex justify-center">
          {/* image links to github */}
          <a
            href={links[currentIndex]}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <img
              src={slides[currentIndex]}
              alt="hey"
              className="sm:w-1/2 w-3/4 rounded-2xl bg-center bg-cover duration-500 cursor-pointer hover:scale-105"
            />
          </a>
        </div>
        <div className="flex top-4 justify-center py-4">
          <div className="cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="flex flex-col justify-center text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
          <div className="cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
