import React from "react";
import { useMediaQuery } from "react-responsive";

// #Icons
import Address from "../../public/images/icons/address.png";
import Phone from "../../public/images/icons/phone.png";
import Message from "../../public/images/icons/message.png";
import Logo from "../../public/images/logo.png";
import Facebook from "../../public/images/icons/facebook-footer.png";
import Linkedin from "../../public/images/icons/linkedin-footer.png";
import Twitter from "../../public/images/icons/twitter-footer.png";
import Github from "../../public/images/icons/github-footer.png";

function Footer() {
  const isTablet = useMediaQuery({ query: "(max-width: 1300px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });

  return (
    <div id="footer" className="flex flex-col gap-3 bg-black  text-white">
      <div className="grid gap-3 m-auto w-fit items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 transition-[1s] duration-1000">
        <div className="pl-[0.5rem] w-[300px]  h-fit  flex flex-col gap-3 ">
          <h1 className="text-[32px] font-bold  text-center w-full">Contact</h1>
          <div
            className={
              isTablet
                ? "flex gap-3  font-semibold "
                : "flex gap-3  font-semibold justify-start "
            }
          >
            <img src={Address} alt="address" width={35} />
            <h3>Bangkok, Thailand</h3>
          </div>
          <div
            className={
              isTablet
                ? "flex gap-3  font-semibold "
                : "flex gap-3  font-semibold justify-start "
            }
          >
            <img src={Phone} alt="phone" width={35} />
            <h3>xxx-xxx-xxxx</h3>
          </div>
          <div
            className={
              isTablet
                ? "flex gap-3  font-semibold "
                : "flex gap-3  font-semibold justify-start "
            }
          >
            <img src={Message} alt="message" width={35} />
            <h3>pj.webdeveloper01@gmail.com</h3>
          </div>
        </div>

        <div className="mid w-[300px]  m-auto h-full  p-3 flex flex-col gap-3 ">
          <h1 className="text-[32px] font-bold  text-center w-full">Service</h1>
          <ul className=" gap-3 flex flex-col font-semibold items-center">
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              FAQ
            </li>
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              HELP
            </li>
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              CHAT
            </li>
          </ul>
        </div>

        <div className="right w-[300px]  m-auto h-fit  p-3 flex flex-col gap-3 ">
          <h1 className="text-[32px] font-bold  text-center w-full">
            Information
          </h1>
          <ul className=" cursor-pointer gap-3 flex flex-col font-semibold  items-center">
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              About
            </li>
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              Contact
            </li>
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              Portfolio
            </li>
            <li className="cursor-pointer w-fit opacity-80 hover:opacity-100 duration-500">
              Contact
            </li>
          </ul>
        </div>

        <div className="bot w-[300px] h-fit m-auto flex flex-col bg-black items-center justify-center ">
          <img src={Logo} alt="logo" width={200} />
          <div className="icons-footer p-3 flex items-center justify-center gap-5">
            <img
              className="cursor-pointer opacity-80 hover:opacity-100"
              src={Facebook}
              alt="facebook"
              width={40}
            />
            <img
              className="cursor-pointer opacity-80 hover:opacity-100"
              src={Linkedin}
              alt="linkedin"
              width={50}
            />
            <img
              className="cursor-pointer opacity-80 hover:opacity-100"
              src={Twitter}
              alt="twitter"
              width={50}
            />
            <img
              className="cursor-pointer opacity-80 hover:opacity-100"
              src={Github}
              alt="github"
              width={50}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-black flex flex-col items-center justify-center mt-[-30px]">
        <p className="text-[20px] py-3 font-semibold">
          Copyright © Portfolio website, PJ
        </p>
      </div>
    </div>
  );
}

export default Footer;
