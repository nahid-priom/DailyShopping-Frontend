import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState (0);
  const Data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0?2 : (prev) => prev-1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2?0 : (prev) => prev+1)
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-auto xl:h-[650px] relative">
        <div
        style={{transform: `translateX(-${currentSlide * 100}vw)`}}
        className="w-[300vw] transition-transform duration-1000 h-auto xl:h-full flex">
          <img
            src={Data[0]}
            alt="image1"
            className="w-screen h-3/4 xl:h-full object-fill"
            loading="priority"
          />
          <img
            src={Data[1]}
            alt="image2"
            className="w-screen h-3/4 xl:h-full object-fill"
          />
          <img
            src={Data[2]}
            alt="image3"
            className="w-screen h-3/4 xl:h-full object-fill"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 top-28 xl:bottom-44">
          <div onClick={prevSlide} className="xl:w-14 xl:h-12 h-8 w-10 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className="xl:w-14 xl:h-12 h-8 w-10 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
