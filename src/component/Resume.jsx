import React, { useState } from "react";
import ResumeImage from "../../public/images/resume.png";

import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import DownloadImage from "../../public/images/icons/download.png";

export const textAnimate = {
  offscreen: { y: 15, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: { type: "spring", bounce: 0.4, duration: 3 },
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};
const button = {
  rest: { scale: 1 },
  // hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
  transition: { duration: 3 },
};

const DropIn = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function Resume() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleViewResume = () => {
    console.log("Viewing");
    setIsOpenModal(true);
  };

  return (
    <div
      id="resume"
      className="relative w-full h-fit pb-5 items-start flex flex-col justify-center"
    >
      {isOpenModal && (
        <motion.div
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
          className="modal bg-red-500 z-[0]"
          onClick={(e) => e.stopPropagation()}
          variants={DropIn}
        >
          <div className="absolute top-0  w-full h-screen flex flex-col items-center bg-white opacity-95 shadow-lg">
            <button
              className="z-[1] w-full text-end px-3   text-red-500 font-bold text-[175%]"
              onClick={() => setIsOpenModal(false)}
            >
              close
            </button>
          </div>

          <motion.div
            variants={DropIn}
            transition={{ duration: 1 }}
            className={
              isTablet
                ? "img-container absolute top-0 left-[25%] w-1/2  flex justify-center my-5 mx-5 p-[3rem]"
                : "absolute top-10 w-full p-[3rem]"
            }
          >
            <img
              src={ResumeImage}
              alt="resume"
              // width={isMobile ? 100% : 300}
              className="shadow-xl cursor-pointer w-full h-3/4 m-auto"
              onClick={handleViewResume}
            />
          </motion.div>
        </motion.div>
      )}

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
            className="shadow-xl cursor-pointer"
            onClick={handleViewResume}
          />
        </div>
        <div className="right w-full h-full xl:max-w-[400px]   flex flex-col p-5 shadow-xl rounded-sm">
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
            className="rounded-md items-center active:bg-black duration-500 active:text-white hover:btn-shadow shadow-xl w-fit h-fit flex gap-2 bg-white px-3 py-1 "
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
