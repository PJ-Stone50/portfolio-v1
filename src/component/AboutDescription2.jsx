import React from "react";
import { useMediaQuery } from "react-responsive";
import Tablet from "../../public/images/tablet.png";
import Icons from "../../public/images/icons.png";
import DrawIO from "../../public/images/icons/drawio.png";
import Figma from "../../public/images/icons/figma.png";
import Gitbash from "../../public/images/icons/gitbash.png";
import Github from "../../public/images/icons/github.png";
import Gitlab from "../../public/images/icons/gitlab.png";
import Nodejs from "../../public/images/icons/nodejs.png";
import Reactjs from "../../public/images/icons/reactjs.png";
import Npm from "../../public/images/icons/npm.png";
import TailwindCSS from "../../public/images/icons/tailwindcss.png";
import Vscode from "../../public/images/icons/vscode.png";

// Framer-motion
import { motion } from "framer-motion";

export const imageAnimate = {
  offscreen: { x: 100 },
  onscreen: { x: 0, rotate: [0, 90, -90, 0] },
  transition: { type: "spring", bounce: 0.8, duration: 3 },
};
export const textAnimate = {
  offscreen: { y: 15, opacity: 0 },
  onscreen: { y: 0, opacity: 1 },
  transition: { type: "spring", bounce: 0.4, duration: 3 },
};

const MyIcons = [
  DrawIO,
  Figma,
  Gitbash,
  Github,
  Gitlab,
  Nodejs,
  Reactjs,
  Npm,
  TailwindCSS,
  Vscode,
];

const Container = ({ styles, isMobile }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full h-fit flex flex-col"
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
          ABOUT
        </motion.h1>
      </div>
      <div
        className={
          isMobile ? "w-full h-fit flex" : "w-full h-fit flex flex-col"
        }
      >
        <div className={styles.left}>
          <motion.h1
            // transition={{ duration: 0.5 }}
            variants={textAnimate}
            transition={{ duration: 1 }}
            className={styles.heading}
          >
            From Figma to Reality
          </motion.h1>
          <motion.h1
            transition={{ duration: 1 }}
            variants={textAnimate}
            className={styles.heading}
          >
            A Creative Explorer's Portfolio
          </motion.h1>
          <div>
            <motion.p
              transition={{ duration: 1 }}
              variants={textAnimate}
              className={styles.paragraph}
            >
              For me, web development isn't just about code; it's about
              translating creative ideas into tangible experiences. This
              portfolio, my first, showcases the evolution of my skills from
              design in Figma to functional websites using ReactJS and
              TailwindCSS. Dive in to discover my fascination with user
              interaction, accessibility, and pushing the boundaries of what's
              possible.
            </motion.p>
          </div>
        </div>
        <div className={styles.right}>
          <motion.div
            transition={{ duration: 1.5 }}
            variants={textAnimate}
            className={styles.iconContainer}
          >
            {MyIcons.map((item, index) => (
              <div className={styles.iconItem} key={index}>
                <img
                  src={item}
                  alt={`icon${index}`}
                  // style={{ maxWidth: "75px" }}
                  className={
                    isTablet
                      ? "max-w-[75px] transition-[1s] duration-500"
                      : "max-w-[60px] transition-[1s] duration-500"
                  }
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutDescription2 = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });
  return (
    <div className={isTablet ? tabletStyles.container : mobileStyles.container}>
      <Container styles={styles} isMobile={isMobile} />
    </div>
  );
};

const styles = {
  container: "w-full bg-white items-center flex justify-center",
  left: "left pt-[1.5rem] px-[1.5rem] xl:pl-[8rem] max-w-[600px] duration-1000 w-full h-full items-center justify-center m-auto flex flex-col",
  right: "right w-full flex items-center justify-start ",
  heading: "text-3xl font-bold text-start w-full py-[0.5rem] ",
  paragraph: "text-[18px] font-normal py-6 opacity-80 ",
  iconContainer:
    "w-full h-auto flex flex-wrap items-center justify-center rounded-lg pb-[1.5rem] max-w[100px]",
  iconItem: "p-1 items-center flex justify-center",
};

const tabletStyles = {
  container: "w-full h-screen bg-white items-center flex justify-center",
};

const mobileStyles = {
  container: "w-full h-full bg-white items-center flex flex-col justify-center",
};

export default AboutDescription2;
