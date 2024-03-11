import React, { useEffect, useRef, useState } from "react";

import { useMediaQuery } from "react-responsive";
import emailjs from '@emailjs/browser';

import AddressContact from "../../public/images/icons/address-contact.png";
import PhoneContact from "../../public/images/icons/phone-contact.png";
import MessageContact from "../../public/images/icons/message-contact.png";

function WorkspaceContact() {
  const isTablet = useMediaQuery({ query: "(min-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 780px)" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n491wuk', 'template_i95xnnl', form.current, {
        publicKey: 'oGiFBV47EjnmKYIbk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    console.log("Name =>", name);
    console.log("Email =>", email);
    console.log("Message =>", message);
  }, [email, message]);

  return (
    <div
      id="workspace-contact"
      className={
        isTablet
          ? "w-full h-screen bg-stone-300 items-center flex justify-center"
          : "w-full h-full bg-stone-300 items-center flex flex-col justify-center"
      }
    >
    {/* Left */}
      <div
        className={
            isTablet
            ? "left w-full h-fit pt-5 pl-[15rem] pr-[1.5rem] flex flex-col items-center justify-center gap-0 transition-[1s]"
            : "left w-full h-fit pt-5 p-[1rem] pb-[1.5rem] flex flex-col items-center justify-center gap-0 transition-[1s]"
        }
      >
        <h1 className="text-[48px] text-red-500 font-bold whitespace-nowrap">Workspace Contact</h1>
        <p className="text-[24px] font-medium pt-[30px] pb-[3rem] opacity-80">
          I'm here to answer your questions and discuss the future if we have
          the opportunity to work together.
        </p>

        <div className="w-full h-full flex flex-col gap-3">
          <div
            className={
              isTablet
                ? "flex gap-3  font-semibold "
                : "flex gap-3  font-semibold justify-start "
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
                  ? "text-[28px]  font-medium flex items-center"
                  : "text-[18px]  font-medium flex items-center"
              }
            >
              Bangkok, Thailand
            </h3>
          </div>
          <div
            className={
              isTablet
                ? "flex gap-3  font-medium "
                : "flex gap-3  font-medium justify-start "
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
                  ? "text-[28px]  font-medium flex items-center"
                  : "text-[18px]  font-medium flex items-center"
              }
            >
              091-xxx-xxxx
            </h3>
          </div>
          <div
            className={
              isTablet
                ? "flex gap-3  font-medium "
                : "flex gap-3  font-medium justify-start "
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
                  ? "text-[28px]  font-medium flex items-center"
                  : "text-[18px]  font-medium flex items-center"
              }
            >
              pj.webdeveloper01@gmail.com
            </h3>
          </div>
        </div>
      </div>

    {/* Right */}

    <div
className={
  isTablet
    ? "right w-full h-full pt-[5rem] items-center justify-center m-auto flex flex-col pl-[1.5rem] pr-[5rem] pb-[3rem] gap-5"
    : "right w-full h-full duration-500 transition-[1s] mt-[30px]  items-center justify-center m-auto flex flex-col px-[1.5rem] pb-[3rem] gap-5"
}
>

<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
<input
  type="text"
  name="user_name"
  placeholder="Name*"
  className="border-2 border-black w-[400px] h-[60px] rounded-md p-5 font-semibold"
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="text"
  name="user_email"
  placeholder="Email Address*"
  className="border-2 border-black w-[400px] h-[60px] rounded-md p-5 font-semibold"
  onChange={(e) => setEmail(e.target.value)}
/>

<textarea
  name="message"
  id="message-contact"
  cols="30"
  rows="10"
  placeholder="Message*"
  className="border-2 border-black w-[400px] h-[200px] rounded-md p-5 font-semibold"
  onChange={(e) => setMessage(e.target.value)}
></textarea>

<input type="submit" value="Send" className="w-[400px] h-[60px] hover:opacity-80 duration-500
 bg-black rounded-md text-white text-[24px] font-semibold text-center items-center"/>



</form>
</div>
    </div>
  );
}

export default WorkspaceContact;


