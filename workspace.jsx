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

const demoEcommerce2 = {
  src: '',
  heading: "Ecommerce Skooldio",
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
  const [currentComponent, setCurrentComponent] = useState(0);

  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  const renderComponent = () => {
    switch (currentComponent) {
      case 0:
        return (
          <CardPortfolio
            src={demoEcommerce.src}
            heading={demoEcommerce.heading}
            p={demoEcommerce.p}
            linkCode={demoEcommerce.linkCode}
            linkDemo={demoEcommerce.linkDemo}
            currentComponent={currentComponent}
            setCurrentComponent={() => setCurrentComponent(1)}
          />
        );
      case 1:
        return (
          <CardPortfolio
            src={demoPortfolio.src}
            heading={demoPortfolio.heading}
            p={demoPortfolio.p}
            linkCode={demoPortfolio.linkCode}
            linkDemo={demoPortfolio.linkDemo}
            currentComponent={currentComponent}
            setCurrentComponent={() => setCurrentComponent(2)}
          />
        );
      case 2:
        return (
          <CardPortfolio
            src={demoProject3.src}
            heading={demoProject3.heading}
            p={demoProject3.p}
            linkCode={demoProject3.linkCode}
            linkDemo={demoProject3.linkDemo}
            currentComponent={currentComponent}
            setCurrentComponent={() => setCurrentComponent(0)} // Loop back to the first project or handle as needed
          />
        );
      default:
        setCurrentComponent(0); // Reset to first component in case of undefined state
        return null;
    }
  };

  return (
    <div>
      <div className="w-screen topic flex  items-center pb-8 ">
        <span className="w-full bg-black h-[4px] mx-5 "></span>
        <motion.h1
          transition={{ duration: 1 }}
          animate={{ textAnimate }} // Corrected from animater to animate
          className={
            isMobile
              ? "text-[32px] font-bold mt-[-8px] mr-5"
              : "text-[24px] font-bold mt-[-8px] mr-5"
          }
        >
          PORTFOLIO
        </motion.h1>
      </div>
      <div
        id="portfolio"
        className={
          isMobile
            ? "relative bg-white  py-[3rem] w-full h-fit pb-5  shadow-lg items-start flex flex-col justify-center "
            : "relative bg-white w-full h-fit pb-5  shadow-lg items-start flex flex-col justify-center "
        }
      >
        {renderComponent()}
      </div>
    </div>
  );
}
}

export default Portfolio;
