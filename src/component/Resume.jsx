import React from "react";
import ResumeImage from "../../public/images/resume.png";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import DownloadImage from "../../public/images/icons/download.png";

export const textAnimate = {
  offscreen: { y: 15, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: { type: "spring", bounce: 0.4, duration: 3 },
};

function Resume() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  return (
    <div
      id="resume"
      className="w-full h-fit pb-5 items-start flex flex-col justify-center"
    >
      <div className="w-screen topic flex  items-center pb-8 ">
        <span className="w-full bg-black h-[4px] mx-5 "></span>
        <motion.h1
          transition={{ duration: 1 }}
          animater={{ textAnimate }}
          className={
            isMobile
              ? "text-[32px] font-bold mt-[-8px] mr-5"
              : "text-[24px] font-bold mt-[-8px] mr-5"
          }
        >
          RESUME
        </motion.h1>
      </div>

      <div
        className={
          isMobile
            ? "w-screen h-full flex gap-3 justify-center"
            : "w-screen h-full flex flex-col gap-3 justify-center items-center"
        }
      >
        <div className="img-container w-fit flex justify-center mx-5">
          <img
            src={ResumeImage}
            alt="resume"
            width={isMobile ? 500 : 300}
            className="shadow-xl"
          />
        </div>
        <div className="right w-full h-full xl:max-w-[400px] mx-5 mr-5   flex flex-col p-5 shadow-xl rounded-sm">
          <h1 className="text-[24px] font-bold">Resume</h1>
          <p className="pb-3 duration-500">
            Step into my world, where the journey from novice programmer to
            aspiring front-end developer unfolds. This resume captures my
            evolution, highlighting a deep dive into Python before transitioning
            to the vibrant landscape of web development. With a keen interest in
            e-commerce, I've honed my skills in HTML, CSS, and JavaScript,
            further enriched by my proficiency in React and NodeJS libraries,
            all underscored by a commitment to both waterfall and agile
            methodologies
          </p>
          <button
            type="button"
            className="rounded-md active:bg-black duration-500 active:text-white btn-shadow w-fit h-fit flex gap-2 bg-white px-3 py-1 "
          >
            <p>Download</p>
            <img src={DownloadImage} alt="download" width={30} />
          </button>
        </div>
      </div>

      {/* <div className="w-full bg-red-500 p-3 flex">
        <h1 className="w-full bg-stone-300">1</h1>
        <h1 className="w-full bg-stone-500">2</h1>
      </div> */}
    </div>
  );
}

export default Resume;
