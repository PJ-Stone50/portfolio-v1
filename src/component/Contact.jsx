import React, { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";

import AddressContact from "../../public/images/icons/address-contact.png";
import PhoneContact from "../../public/images/icons/phone-contact.png";
import MessageContact from "../../public/images/icons/message-contact.png";

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

const Container = ({ isMobile }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 300px)" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n491wuk", "template_i95xnnl", form.current, {
        publicKey: "oGiFBV47EjnmKYIbk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    console.log("Name =>", name);
    console.log("Email =>", email);
    console.log("Message =>", message);
  }, [email, message]);
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      className="w-full h-fit flex flex-col "
    >
      <div className="w-screen topic flex  items-center ">
        <span className="w-full bg-black h-[4px] mx-5 "></span>
        <motion.h1
          transition={{ duration: 1 }}
          variants={textAnimate}
          className={
            isMobile
              ? "text-[32px] font-bold mt-[-8px] mr-5"
              : "text-[24px] font-bold mt-[-8px] mr-5"
          }
        >
          CONTACT
        </motion.h1>
      </div>
      <div
        className={
          isMobile ? "w-full h-full flex " : "w-full h-full flex flex-col "
        }
      >
        {/* Left */}
        <div
          className={
            isMobile
              ? "left  w-full h-fit  px-[3rem] mt-[2rem] flex flex-col items-center justify-center gap-0 transition-[1s]"
              : "left  w-full h-fit  px-[1.5rem] mt-[2rem] flex flex-col items-center justify-end gap-0 transition-[1s]"
          }
        >
          <motion.h1
            transition={{ duration: 1 }}
            variants={textAnimate}
            className="text-[32px] w-full font-bold whitespace-nowrap"
          >
            Hire me
          </motion.h1>
          <motion.p
            transition={{ duration: 1 }}
            variants={textAnimate}
            className="text-[18px] w-full font-medium pt-[5px] pb-[15px] opacity-80"
          >
            I'm here to answer your questions and discuss the future if we have
            the opportunity to work together.
          </motion.p>

          <motion.div
            transition={{ duration: 1 }}
            variants={textAnimate}
            className="w-full h-full flex flex-col gap-3"
          >
            <div
              className={
                isTablet
                  ? "flex gap-1  font-semibold "
                  : "flex gap-1  font-semibold justify-start "
              }
            >
              <img
                src={AddressContact}
                alt="address"
                className="mt-[5px] w-[35px] h-[35px]"
              />
              <h3
                className={
                  isMobile
                    ? "text-[18px]  font-medium flex items-center"
                    : "text-[14px]  font-medium flex items-center"
                }
              >
                Bangkok, Thailand
              </h3>
            </div>
            <div
              className={
                isTablet
                  ? "flex gap-1  font-medium "
                  : "flex gap-1  font-medium justify-start "
              }
            >
              <img
                src={PhoneContact}
                alt="phone"
                width={35}
                className="mt-[5px]"
              />
              <h3
                className={
                  isMobile
                    ? "text-[18px]  font-medium flex items-center"
                    : "text-[14px]  font-medium flex items-center"
                }
              >
                xxx-xxx-xxxx
              </h3>
            </div>
            <div
              className={
                isTablet
                  ? "flex gap-1  font-medium "
                  : "flex gap-1  font-medium justify-start "
              }
            >
              <img
                src={MessageContact}
                alt="message"
                width={35}
                className="mt-[5px]"
              />
              <h3
                className={
                  isMobile
                    ? "text-[18px]  font-medium flex items-center"
                    : "text-[14px]  font-medium flex items-center"
                }
              >
                pj.webdeveloper01@gmail.com
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Right */}

        <div
          className={
            isTablet
              ? "right w-full h-full pt-[5rem] items-center justify-center m-auto flex flex-col pl-[1.5rem] pr-[5rem] pb-[3rem] gap-5"
              : "right w-full h-full duration-500 transition-[1s] mt-[30px]  items-start justify-start m-auto flex flex-col px-[1.5rem] pb-[3rem] gap-5"
          }
        >
          <motion.form
            transition={{ duration: 1 }}
            variants={textAnimate}
            ref={form}
            onSubmit={sendEmail}
            className={
              isMobile
                ? "flex flex-col gap-3 w-full "
                : "flex flex-col gap-3 w-full "
            }
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name*"
              className="border-[0.5px] border-black  md:w-full h-[40px] rounded-md p-5 font-semibold"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="user_email"
              placeholder="Email Address*"
              className="border-[0.5px] border-black  md:w-full h-[40px] rounded-md p-5 font-semibold"
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name="message"
              id="message-contact"
              cols="30"
              rows="10"
              placeholder="Message*"
              className="border-[0.5px] border-black  md:w-full h-[200px] rounded-md p-5 font-semibold"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <input
              type="submit"
              value="Send"
              className="w-full h-[40px]  hover:opacity-80 duration-500
 bg-black rounded-md text-white text-[24px] font-semibold text-center items-center cursor-pointer"
            />
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

function Contact() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  return (
    <div
      id="contact"
      className={
        isTablet
          ? "w-full h-full   bg-white items-center flex  justify-center"
          : "w-full h-full  px[3rem] bg-white items-center flex flex-col justify-center"
      }
    >
      <Container isMobile={isMobile} />
    </div>
  );
}

export default Contact;
