import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Gitlab from "../../public/images/icons/gitlab.png";
import Demo from "../../public/images/icons/demo1.png";
// Framer-motion
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

export default function CardPortfolio({ src, heading, p, linkCode, linkDemo }) {
  const isTablet = useMediaQuery({ query: "(max-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 680px)" });

  const [labelWidth, setLabelWidth] = useState(0);
  const [labelWidth1, setLabelWidth1] = useState(0);

  useEffect(() => {}, []);

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full h-fit flex  gap-3 px-5 "
    >
      <div
        className={
          isMobile
            ? "card w-full h-fit flex flex items-start bg-white rounded-sm duration-500  z-10"
            : "card w-full h-fit flex flex-col  bg-white rounded-sm duration-500   z-10"
        }
      >
        <div className="w-full h-fit rounded-sm flex items-center justify-end pr-[1.5rem]">
          <motion.img
            transition={{ duration: 1 }}
            variants={textAnimate}
            src={src}
            alt="leftImg"
            // width={isMobile ? 500 : }
            className={
              isMobile
                ? "w-[600px] h-[1/2] object-contain shadow-xl rounded-sm  py-5 px-5"
                : "w-full h-fit object-cover shadow-xl rounded-sm   py-5 px-5"
            }
          />
        </div>

        <div className="right w-full h-fit flex flex-col  ml-[0.5rem] pt-[1.5rem]  rounded-sm">
          <motion.h1
            transition={{ duration: 1 }}
            variants={textAnimate}
            className="text-[24px] font-bold"
          >
            {heading}
          </motion.h1>
          <motion.p
            transition={{ duration: 1 }}
            variants={textAnimate}
            className="pb-3 duration-500"
          >
            {p}
          </motion.p>
          <div className="w-fit h-fit flex  ml-[-10px] m-auto">
            <div className="relative w-fit h-fit flex items-center p-3 gap-2">
              <motion.a
                transition={{ duration: 1 }}
                variants={textAnimate}
                href={linkCode}
                id="code"
                onMouseEnter={() => setLabelWidth(50)}
                onMouseLeave={() => setLabelWidth(0)}
                target="_blank"
                className="whitespace-nowrap hover:border-black hover:border-b-2  duration-500 hover:rounded-sm hover:px-3  "
              >
                Code
              </motion.a>
              <label
                htmlFor="code"
                className={`absolute transition[1s] duration-500 hover:w-[0px] w-[${labelWidth}px] left-[6px] bottom-[15px] border-b-2 border-black rounded-lg`}
              ></label>
              <motion.img
                transition={{ duration: 1 }}
                variants={textAnimate}
                src={Gitlab}
                alt="gitlab"
                width={35}
              />
            </div>
            <div className="relative w-fit h-fit flex items-center p-3 gap-2">
              <motion.a
                transition={{ duration: 1 }}
                variants={textAnimate}
                href={linkDemo}
                id="demo"
                onMouseEnter={() => {
                  setLabelWidth1(50);
                  console.log("hovering", labelWidth1);
                }}
                onMouseLeave={() => {
                  setLabelWidth1(0);
                  console.log("leaving", labelWidth1);
                }}
                target="_blank"
                className="whitespace-nowrap hover:border-black hover:border-b-2  duration-500 hover:rounded-sm hover:px-3 "
              >
                Live Demo
              </motion.a>
              <label
                htmlFor="demo"
                className={`absolute transition[1s] duration-500  w-[${labelWidth1}px] left-[6px] bottom-[15px] border-b-2 border-black rounded-lg`}
              ></label>
              <motion.img
                transition={{ duration: 1 }}
                variants={textAnimate}
                src={Demo}
                alt="demo"
                width={35}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
