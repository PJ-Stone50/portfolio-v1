import React from "react";
import { useMediaQuery } from "react-responsive";
import IconLinkedIn from "../../public/images/icon-linkedin.png";
import IconGithub from "../../public/images/icon-github.png";
import Profile from "../../public/images/profile.png";
import ArrowDown from "../../public/images/arrow-down.png";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";

// Header section for desktop view
function DesktopHeader() {
  const [text] = useTypewriter({
    words: ["ReactJS", "NodeJS", "TailwindCSS", "Figma", "Gitlab"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 200,
  });

  return (
    <div id="header" className="w-full h-screen items-center flex justify-center relative">
      <div className="w-full h-full bg-white items-start flex flex-col justify-center pl-[15rem] gap-3 transition-[1s] duration-500">
        <h1 className="type-writer text-black text-[32px] whitespace-nowrap">
          I created by
          <span className="ml-[5px]" style={{ fontWeight: "bold", opacity: "80%" }}>
            {text}
          </span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>
        </h1>

        <h1 className="text-black font-bold text-[32px]">From Pixels to Products</h1>

        <h1 className="text-black font-bold text-[32px]">My Design & Development Portfolio</h1>
        <p className="text-[24px] text-black font-medium">
          Witness the journey from initial concepts to polished products. I design and develop experiences that are both
          beautiful and functional.
        </p>
        <div className="flex gap-3 bg-white mt-3">
          <img className="cursor-pointer" src={IconLinkedIn} alt="linkedin" width={50} />
          <img className="cursor-pointer" src={IconGithub} alt="github" width={50} />
        </div>
      </div>
      <div className="w-full h-full bg-white items-start pl-[5rem] flex flex-col justify-center pr-5">
        <img className="" src={Profile} alt="github" width={450} />
      </div>
      <motion.div
  style={{ position: "absolute", bottom: 75, left: "50%", cursor: "pointer" }}
  animate={{
    translateY: [0, -15, 0, -15, 0], // Animate translateY from 0 to -15 and back to 0, repeated
  }}
  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }} // Animation settings
>
  <a href="#about" className="">
    <img src={ArrowDown} alt="arrow-down" width={50} />
  </a>
</motion.div>

    </div>
  );
}

// Header section for mobile view
function TabletHeader() {
  const [text] = useTypewriter({
    words: ["ReactJS", "NodeJS", "TailwindCSS", "Figma", "Gitlab"],
    loop: {},
  });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const padding = isMobile ? "1rem" : "5rem";

  return (
    <div className="w-full h-full py-5 bg-white items-center flex flex-col-reverse justify-center transition-[1s] duration-500">
      <div style={{ padding: `1rem ${padding} 0rem ${padding}` }} className="w-full h-full bg-white items-start gap-3 flex flex-col justify-start px-5 py-5 transition-[1s] duration-500">
        <h1 className="type-writer text-black font-medium text-[32px] whitespace-nowrap">
          I created by
          <span className="ml-[5px]" style={{ fontWeight: "bold", opacity: "80%" }}>
            {text}
          </span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>
        </h1>

        <h1 className="text-black font-bold text-[24px]">From Pixels to Products</h1>
        <h1 className="text-black font-bold text-[24px]">My Design & Development Portfolio</h1>
        <p className="text-[20px] text-black font-medium">
          Witness the journey from initial concepts to polished products. I design and develop experiences that are both
          beautiful and functional.
        </p>
        <div className="flex gap-3 bg-white mt-3 transition-[1s] duration-500">
          <img className="cursor-pointer opacity-80 hover:opacity-100 duration-500" src={IconLinkedIn} alt="linkedin" width={40} />
          <img className="cursor-pointer opacity-80 hover:opacity-100 duration-500" src={IconGithub} alt="github" width={40} />
        </div>
      </div>
      <div className="w-full h-full py-[3rem] bg-white items-center flex flex-col justify-center px-5 transition-[1s] duration-500">
        <img className="" src={Profile} alt="profile-img" width={250} />
      </div>
    </div>
  );
}


function MobileHeader() {
  const [text] = useTypewriter({
    words: ["ReactJS", "NodeJS", "TailwindCSS", "Figma", "Gitlab"],
    loop: {},
  });

  return (
    <div className="w-full h-full py-5 bg-white items-center flex flex-col-reverse justify-center transition-[1s] duration-500">
      <div style={{ padding: "1rem" }} className="w-full h-full bg-white items-start gap-3 flex flex-col justify-start px-5 py-5 transition-[1s] duration-500">
        <h1 className="type-writer text-black font-medium text-[32px] whitespace-nowrap">
          I created by
          <span className="ml-[5px]" style={{ fontWeight: "bold", opacity: "80%" }}>
            {text}
          </span>
          <span style={{ color: "black" }}>
            <Cursor />
          </span>
        </h1>

        <h1 className="text-black font-bold text-[24px]">From Pixels to Products</h1>
        <h1 className="text-black font-bold text-[24px]">My Design & Development Portfolio</h1>
        <p className="text-[20px] text-black font-medium">
          Witness the journey from initial concepts to polished products. I design and develop experiences that are both
          beautiful and functional.
        </p>
        <div className="flex gap-3 bg-white mt-3 transition-[1s] duration-500">
          <img className="cursor-pointer opacity-80 hover:opacity-100 duration-500" src={IconLinkedIn} alt="linkedin" width={40} />
          <img className="cursor-pointer opacity-80 hover:opacity-100 duration-500" src={IconGithub} alt="github" width={40} />
        </div>
      </div>
      <div className="w-full h-full py-[3rem] bg-white items-center flex flex-col justify-center px-5 transition-[1s] duration-500">
        <img className="" src={Profile} alt="profile-img" width={250} />
      </div>
    </div>
  );
}

function Header() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return <>{isTablet ? <DesktopHeader /> : (isMobile ? <MobileHeader /> : <TabletHeader />)}</>;
}

export default Header;
