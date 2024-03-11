import React from "react";
import Tablet from "../../public/images/tablet.png";
import { useMediaQuery } from "react-responsive";

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

const Container = ({ styles, isMobile }) => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className={isMobile ? "w-full h-fit flex" : "w-full h-fit flex flex-col"}
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

      <div className={styles.left}>
        <motion.img
          transition={{ duration: 1 }}
          variants={imageAnimate}
          src={Tablet}
          alt="tablet"
          width={isMobile ? 400 : 300}
          className={isMobile ? styles.tabletMobile : styles.tabletDesktop}
        />
      </div>
      <div className={styles.right}>
        <motion.h1
          transition={{ duration: 1 }}
          variants={textAnimate}
          className={styles.heading}
        >
          I am a Developer
        </motion.h1>
        <motion.h1
          transition={{ duration: 1 }}
          variants={textAnimate}
          className={styles.heading}
        >
          I write code for building websites
        </motion.h1>
        <motion.p
          transition={{ duration: 1 }}
          variants={textAnimate}
          className={styles.paragraph}
        >
          I'm a passionate front-end developer fueled by a year of immersive
          learning. This website, built with ReactJS, TailwindCSS, Figma, and
          other tools, marks the exciting launch of my journey. While new to the
          professional scene, my passion for crafting pixel-perfect experiences
          burns bright. Explore my projects to witness my dedication to clean
          code, user-centric design, and continuous improvement.
        </motion.p>
      </div>
    </motion.div>
  );
};

const AboutDescription1 = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  const styles = {
    left: "left w-full h-fit py-5 px-5  flex items-center justify-center",
    right:
      "right xl:pr-[15rem] w-full h-full items-center justify-center m-auto flex flex-col px-5 pb-3",
    heading: "text-3xl font-bold text-start w-full py-[0.5rem]",
    paragraph: "text-[18px] font-medium py-3 opacity-80",
    tabletDesktop: "transition-[1s] duration-1000",
    tabletMobile: "transition-[1s] duration-1000 py-12",
  };

  const tabletStyles = {
    container: "w-full h-screen bg-white items-center flex justify-center",
  };

  const mobileStyles = {
    container:
      "w-full h-full bg-white items-center flex flex-col justify-center",
  };

  return (
    <div className={isTablet ? tabletStyles.container : mobileStyles.container}>
      <Container styles={styles} isMobile={isMobile} />
    </div>
  );
};

export default AboutDescription1;
