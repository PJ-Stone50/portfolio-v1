import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import CardPortfolio from "./CardPortfolio";

import DemoEcommerce from "../../public/images/demoEcommerce.png";
import DemoPortfolio from "../../public/images/demoPortfolio.png";

import { motion } from "framer-motion";

const demoEcommerce = {
  src: DemoEcommerce,
  heading: "Clothing Store",
  p: "This online ordering platform, built to showcase my expertise in web development, leverages ReactJS for a user-friendly interface and NodeJS for robust server-side data management. Designed to push the boundaries of modern e-commerce, it stands as a testament to my skills and dedication.",
  linkCode: "https://gitlab.com/PJ-Stone50/clothing-shop",
  linkDemo: "https://vocal-churros-4f64bf.netlify.app/store",
};

const demoPortfolio = {
  src: DemoPortfolio,
  heading: "Portfolio",
  p: "Explore my front-end web development projects, featuring responsive designs and interactive experiences, with Firebase handling authentication and cloud storage, and EmailJS seamlessly sending emails to my inbox.",
  linkCode: "https://gitlab.com/PJ-Stone50/portfolio-v1",
  linkDemo: "https://portfolio-v1-tan-two.vercel.app/",
};

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

function Portfolio() {
  const [currentComponent, setCurrentComponent] = useState(false);

  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  useEffect(() => {
    console.log("Cur Component:", currentComponent);
  }, [currentComponent]);

  return (
    <div
      id="portfolio"
      className={
        isTablet
          ? "relative w-full h-fit pb-5  shadow-lg items-start flex flex-col justify-center "
          : "relative w-full h-fit pb-5  shadow-lg items-start flex flex-col justify-center "
      }
    >
      <div
        className={
          isMobile
            ? "absolute left-[20px] top-[40px] "
            : "absolute left-[20px] top-[25px]"
        }
        style={{ zIndex: "0" }}
      >
        <button
          onClick={() => setCurrentComponent(true)}
          type="button"
          className={
            currentComponent
              ? "portfolioBtn  mt-1 active:bg-black hover:text-white hover:bg-black bg-black text-white active:text-white duration-500 rounded-t-sm btn-shadow  p-1 items-center"
              : "portfolioBtn  mt-1 active:bg-black hover:text-white hover:bg-black active:text-white duration-500 rounded-t-sm btn-shadow bg-white text-black p-1 items-center"
          }
        >
          Portfolio
        </button>
      </div>
      <div
        className={
          isMobile
            ? "absolute left-[85px] top-[40px] "
            : "absolute left-[90px] top-[25px] "
        }
        style={{ zIndex: "0" }}
      >
        <button
          onClick={() => setCurrentComponent(false)}
          className={
            currentComponent
              ? "portfolioBtn  mt-1 active:bg-black hover:text-white hover:bg-black bg-white text-black active:text-white duration-500 rounded-t-sm btn-shadow  p-1 items-center"
              : "portfolioBtn  mt-1 active:bg-black hover:text-white hover:bg-black active:text-white duration-500 rounded-t-sm btn-shadow bg-black text-white p-1 items-center"
          }
        >
          Ecommerce
        </button>
      </div>
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
          PORTFOLIO
        </motion.h1>
      </div>
      {!currentComponent ? (
        <CardPortfolio
          src={demoEcommerce.src}
          heading={demoEcommerce.heading}
          p={demoEcommerce.p}
          linkCode={demoEcommerce.linkCode}
          linkDemo={demoEcommerce.linkDemo}
        />
      ) : (
        <CardPortfolio
          src={demoPortfolio.src}
          heading={demoPortfolio.heading}
          p={demoPortfolio.p}
          linkCode={demoPortfolio.linkCode}
          linkDemo={demoPortfolio.linkDemo}
        />
      )}
    </div>
  );
}

export default Portfolio;
