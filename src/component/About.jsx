import React, { useRef, useEffect } from "react";
import HiLogo from "../../public/images/hi.png";
import Rocket from "../../public/images/rocket.png";

import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export const imageAnimate = {
  offscreen: { x: -100 },
  onscreen: { x: 0, rotate: [0, 90, -90, 0] },
  transition: { type: "spring", bounce: 0.8, duration: 3 },
};
export const textAnimate = {
  offscreen: { y: 15, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: { type: "spring", bounce: 0.4, duration: 3 },
};

const DesktopContainer = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full h-fit "
    >
      <motion.div
        transition={{ duration: 1 }}
        variants={textAnimate}
        className=" flex gap-3 text-center items-center justify-center w-full"
      >
        <motion.h1
          transition={{ duration: 1 }}
          variants={textAnimate}
          className="text-[48px] font-bold pl-[1.5rem]"
          style={{ whiteSpace: "nowrap" }}
        >
          Hi fellow man!
        </motion.h1>
        <img src={HiLogo} alt="hi" width={60} height={60} />
      </motion.div>
      <motion.h1
        transition={{ duration: 1 }}
        variants={textAnimate}
        className="text-[40px] font-bold  text-center"
      >
        I am Panuchai, React Developer
      </motion.h1>
      <motion.h3
        transition={{ duration: 1 }}
        variants={textAnimate}
        className="text-[36px]  text-center "
      >
        Welcome to my portfolio website
      </motion.h3>
    </motion.div>
  );
};

function DesktopAbout() {
  return (
    <div
      id="about"
      className="about w-full h-screen bg-white  items-center flex flex-col justify-center  duration-1000 transition-[1s]"
    >
      <DesktopContainer />
    </div>
  );
}

const MobileContainer = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full h-fit"
    >
      {/* <div className=" w-full">
        <img src={Rocket} alt="Rocket" className="  " width={300} />
      </div> */}
      <div
        // transition={{ duration: 0.5, ease: "easeIn"}} n
        className="w-full h-fit "
      >
        <motion.div
          transition={{ duration: 1 }}
          variants={textAnimate}
          className="flex gap-3 text-center items-center  justify-center"
        >
          <h1
            className="text-[32px] font-bold"
            style={{ whiteSpace: "nowrap" }}
          >
            Hi fellow man!
          </h1>
          <img src={HiLogo} alt="hi" width={45} height={45} />
        </motion.div>
        <motion.h1
          transition={{ duration: 1 }}
          variants={textAnimate}
          className="text-[28px] font-bold text-center"
        >
          I am Panuchai, React Developer
        </motion.h1>
        <motion.h3
          transition={{ duration: 1 }}
          variants={textAnimate}
          className="text-[24px] text-center"
        >
          Welcome to my portfolio website
        </motion.h3>
      </div>
    </motion.div>
  );
};

function MobileAbout() {
  return (
    <div
      id="about"
      className="about-section w-full h-screen bg-white p-5 items-center flex flex-col justify-center duration-1000 transition-[1s]"
    >
      <MobileContainer />
    </div>
  );
}

function About() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });

  return <>{isTablet ? <DesktopAbout /> : <MobileAbout />}</>;
}

export default About;
