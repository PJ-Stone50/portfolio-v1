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

export default function CardPortfolio({
  src,
  heading,
  p,
  linkCode,
  linkDemo,
  currentComponent,
  setCurrentComponent,
}) {
  const isTablet = useMediaQuery({ query: "(max-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 680px)" });

  const [labelWidth, setLabelWidth] = useState(0);
  const [labelWidth1, setLabelWidth1] = useState(0);

  

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full h-fit flex justify-start gap-3 px-5 "
    >
      <div
        className={
          isMobile
            ? "card relative w-fit h-fit flex  items-start bg-white shadow-lg rounded-sm duration-500  z-10"
            : "card relative w-full h-fit flex flex-col  bg-white shadow-lg rounded-sm duration-500   z-10"
        }
      >
        <div
          className={
            isMobile
              ? "ml-[6.7rem] absolute left-[-110px] top-[-30px]"
              : "absolute left-[95px] top-[-30px]"
          }
          style={{ zIndex: "-1" }}
        >
          <button
            onClick={() => setCurrentComponent(0)}
            type="button"
            className={`portfolioBtn mt-1 ${currentComponent === 0 ? "bg-black text-white" : "hover:bg-black hover:text-white text-black"} active:text-white duration-500 rounded-t-sm btn-shadow p-1 items-center`}
          >
            Ecommerce
          </button>
        </div>
        <div
          className={
            isMobile
              ? "absolute left-[90px] top-[-30px] "
              : "absolute left-[0px] top-[-30px] "
          }
          style={{ zIndex: "0" }}
        >
          <button
            onClick={() => setCurrentComponent(1)}
            className={`portfolioBtn mt-1 ${currentComponent === 1 ? "bg-black text-white" : "hover:bg-black hover:text-white text-black"} active:text-white duration-500 rounded-t-sm btn-shadow p-1 items-center`}
          >
            Portfolio
          </button>
        </div>
        <div
          className={
            isMobile
              ? "absolute left-[165px] top-[-30px] "
              : "absolute left-[0px] top-[-30px] "
          }
          style={{ zIndex: "0" }}
        >
          <button
            onClick={() => setCurrentComponent(2)}
            className={`portfolioBtn mt-1 ${currentComponent === 2 ? "bg-black text-white" : "hover:bg-black hover:text-white text-black"} active:text-white duration-500 rounded-t-sm btn-shadow p-1 items-center`}
          >
            Ecommerce2
          </button>
        </div>
        <div className="w-full h-fit rounded-sm flex items-center justify-end pr-[1.5rem]">
          <motion.img
            transition={{ duration: 1 }}
            variants={textAnimate}
            src={src}
            alt="leftImg"
            className={
              isMobile
                ? "w-full h-fit object-contain shadow-xl rounded-sm  py-5 px-5"
                : "w-full h-fit object-cover shadow-xl rounded-sm   py-5 px-5"
            }
          />
        </div>

        <div
          className={
            isTablet
              ? "right  bg-white w-full max-w-[700px] h-fit flex flex-col  ml-[0.5rem] pt-[1.5rem]  rounded-sm"
              : "right bg-white w-full max-w-[700px] h-fit flex flex-col  ml-[0.5rem] pt-[1.5rem]  rounded-sm"
          }
        >
          <motion.h1
            transition={{ duration: 1 }}
            variants={textAnimate}
            className={
              isMobile
                ? "text-[32px] font-bold whitespace-nowrap"
                : "text-[24px] font-bold"
            }
          >
            {heading}
          </motion.h1>
          <motion.p
            transition={{ duration: 1 }}
            variants={textAnimate}
            className={
              isMobile
                ? "pb-3 duration-500 max-w-[600px] "
                : "pb-3 duration-500 max-w-[600px] text-[18px]"
            }
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
                  // console.log("hovering", labelWidth1);
                }}
                onMouseLeave={() => {
                  setLabelWidth1(0);
                  // console.log("leaving", labelWidth1);
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
