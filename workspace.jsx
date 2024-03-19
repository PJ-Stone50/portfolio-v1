import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import IconLinkedIn from "../../public/images/icon-linkedin.png";
import IconGithub from "../../public/images/icon-github.png";
import Profile from "../../public/images/profile.png";
import ArrowDown from "../../public/images/arrow-down.png";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

// Header section for desktop view
function DesktopHeader() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  const [text] = useTypewriter({
    words: ["ReactJS", "NodeJS", "TailwindCSS", "Figma", "Gitlab"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 200,
  });

  return (
    <div
      id="header"
      className="w-full h-screen items-center flex justify-center relative"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        // transition={{ duration: 0.5, delay: 0.25 }}
        className="h-full max-w-[1200px] bg-white items-start  flex flex-col justify-center xl:pl-[15rem] pl-[3rem] gap-3 transition-[1s] duration-500"
      >
        <h1 className="type-writer text-black text-[24px] whitespace-nowrap">
          I created by
          <span
            className="ml-[5px]"
            style={{ fontWeight: "bold", opacity: "80%" }}
          >
            {text}
          </span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>
        </h1>

        <h1 className="text-black font-bold text-[32px]">
          From Pixels to Products
        </h1>

        <h1 className="text-black font-bold text-[32px]">
          My Design & Development Portfolio
        </h1>
        <p className="text-[18px] text-black font-medium">
          Witness the journey from initial concepts to polished products. I
          design and develop experiences that are both beautiful and functional.
        </p>
        <div className="flex gap-3 bg-white mt-3">
          <img
            className="cursor-pointer"
            src={IconLinkedIn}
            alt="linkedin"
            width={40}
          />
          <img
            className="cursor-pointer"
            src={IconGithub}
            alt="github"
            width={40}
          />
        </div>
      </motion.div>
      <div className="w-full h-full bg-white items-center xl:pl-[1rem] flex flex-col justify-center pr-5">
        <img className="" src={Profile} alt="github" width={300} />
      </div>
      <motion.div
        style={{
          position: "absolute",
          bottom: 50,
          left: "50%",
          cursor: "pointer",
          // transition: "0.5s",
        }}
        animate={{
          translateY: [0, -15, 0, -15, 0],
        }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        <a href="#about" className="">
          <img src={ArrowDown} className="" alt="arrow-down" width={40} />
        </a>
      </motion.div>
    </div>
  );
}

function MobileHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  const [text] = useTypewriter({
    words: ["ReactJS", "NodeJS", "TailwindCSS", "Figma", "Gitlab"],
    loop: {},
  });

  return (
    <div
      ref={ref}
      className="w-full h-full bg-white items-center flex flex-col-reverse justify-center transition-[1s] duration-500"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ padding: "1rem" }}
        className={isTablet ? }
      >
        <h1 className="type-writer text-black font-medium text-[24px] whitespace-nowrap">
          I created by
          <span
            className="ml-[5px]"
            style={{ fontWeight: "bold", opacity: "80%" }}
          >
            {text}
          </span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>
        </h1>

        <h1 className="text-black font-bold text-[20px]">
          From Pixels to Products
        </h1>
        <h1 className="text-black font-bold text-[20px]">
          My Design & Development Portfolio
        </h1>
        <p className="text-[18px] text-black font-medium">
          Witness the journey from initial concepts to polished products. I
          design and develop experiences that are both beautiful and functional.
        </p>
        <div className="flex gap-3 bg-white mt-3 transition-[1s] duration-500">
          <img
            className="cursor-pointer opacity-80 hover:opacity-100 duration-500"
            src={IconLinkedIn}
            alt="linkedin"
            width={40}
          />
          <img
            className="cursor-pointer opacity-80 hover:opacity-100 duration-500"
            src={IconGithub}
            alt="github"
            width={40}
          />
        </div>
      </motion.div>
      <div className="w-full h-full py-[1.5rem] bg-white items-center flex flex-col justify-center px-5 transition-[1s] duration-500">
        <img className="" src={Profile} alt="profile-img" width={250} />
      </div>
    </div>
  );
}

function Header() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return <>{isTablet ? <DesktopHeader /> : <MobileHeader />}</>;
}

export default Header;
