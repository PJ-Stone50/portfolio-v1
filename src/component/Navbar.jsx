import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../public/images/logo.png";

import { useUser } from "../contexts/UserContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
// Icons
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { currentUser } = useUser();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(50);
  const [navbarTop, setNavbarTop] = useState(-100);
  const isTablet = useMediaQuery({ query: "(min-width: 780px)" });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTablet) {
      setHamburgerMenu(false);
    } else {
      setNavbarHeight(50);
      setNavbarTop(0);
    }
    // console.log(currentUser.image);
  }, [isTablet]);

  useEffect(() => {
    setNavbarTop(hamburgerMenu ? 0 : -100);
  }, [hamburgerMenu]);

  function handleHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu);
    toggleNavbarHeight();
  }

  function toggleNavbarHeight() {
    setNavbarHeight(hamburgerMenu ? 50 : 200);
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error", error);
      });
  };

  // Redirect to Register.jsx when no user login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User has signed out.
        // navigate("/register");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <nav
        id="navbar"
        className={`items-center  shadow-lg w-full  p-3 flex gap-[1.5rem] justify-center  text-white transition-[1s]`}
        style={{
          top: `${navbarTop}vh`,
          height: `${navbarHeight}px`,
          transition: "top 0.3s, height 0.3s",
        }}
      >
        {!hamburgerMenu && (
          <a href="/" className="bg-red-500 m-0 p-0">
            <img
              src={Logo}
              alt="Logo"
              className="absolute top-[8px] left-[5px] cursor-pointer"
              style={{ width: "120px", height: "40px" }}
            />
          </a>
        )}
        {(isTablet || hamburgerMenu) && (
          <ul
            className={`flex ${
              !isTablet && hamburgerMenu
                ? "flex-col gap-3  items-center justify-center"
                : "flex items-center justify-center  gap-[30px]"
            }`}
          >
            <li className="cursor-pointer opacity-70 hover:opacity-100">
              <a href="#about" className="text-[12px]">
                About
              </a>
            </li>
            <li className="cursor-pointer opacity-70 hover:opacity-100">
              <a href="#portfolio" className="text-[12px]">
                Portfolio
              </a>
            </li>
            <li className="cursor-pointer opacity-70 hover:opacity-100">
              <a href="#resume" className="text-[12px]">
                Resume
              </a>
            </li>
            <li className="cursor-pointer opacity-70 hover:opacity-100">
              <a href="#contact" className="text-[12px]">
                Contact
              </a>
            </li>
            {currentUser ? (
              <div
                className={
                  isTablet
                    ? "flex gap-3 absolute right-[20px] "
                    : "flex gap-3  "
                }
              >
                {currentUser && (
                  <div className="flex gap-1 border-b-[0.5px] items-center justify-center">
                    <FaUserCircle className="h-[20px] w-[20px]" />
                    <p>{currentUser.email}</p>
                  </div>
                )}
                <a
                  href="/profile"
                  className=" text-[12px] text-black bg-white opacity-80 hover:opacity-100 shadow-lg rounded-lg py-1 px-3 "
                >
                  Profile
                </a>
                <button
                  type="button"
                  className=" bg-red-600 text-[12px] text-white opacity-80 hover:opacity-100 shadow-lg rounded-lg py-1 px-3 "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div
                className={
                  isTablet
                    ? "flex gap-1 absolute right-[20px] "
                    : "flex gap-1  "
                }
              >
                <a
                  href="/login"
                  className={
                    isTablet
                      ? "border text-[12px] bg-white opacity-80 hover:opacity-100 text-black hover:shadow-lg rounded-md py-0 px-3 "
                      : "text-[16px] bg-white text-black shadow-lg rounded-lg py-0 px-3 "
                  }
                >
                  Login
                </a>
                <a
                  href="/register"
                  className={
                    isTablet
                      ? "border text-[12px] bg-white opacity-80 hover:opacity-100 text-black hover:shadow-lg rounded-md py-0 px-3 "
                      : "text-[16px] bg-white text-black shadow-lg rounded-lg py-0 px-3 "
                  }
                >
                  Register
                </a>
              </div>
            )}
          </ul>
        )}
        {!isTablet && (
          <div
            className={
              hamburgerMenu
                ? "absolute right-0 flex flex-col gap-1 cursor-pointer px-4 py-[4rem]"
                : "absolute right-0 flex flex-col gap-3 cursor-pointer  p-4"
            }
            onClick={handleHamburgerMenu}
          >
            <div className="flex gap-3 items-center">
              {!hamburgerMenu ? (
                <>
                  {currentUser && (
                    <div className="flex border-b-[0.5px] items-center justify-center">
                      {/* <FaUserCircle className="h-[20px] w-[20px]" /> */}
                      <div className="userImageContainer">
                        <a href="/profile">
                          <img
                            src={currentUser.image}
                            alt="userImg"
                            width={50}
                            className="cursor-pointer opacity-80 hover:opacity-100 hover:shadow-xl"
                          />
                        </a>
                      </div>
                      <p>{currentUser.email}</p>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="w-[20px] h-[2px] mt-1 bg-white rounded-lg"></span>
                    <span className="w-[20px] h-[2px] mt-1 bg-white rounded-lg"></span>
                    <span className="w-[20px] h-[2px] mt-1 bg-white rounded-lg"></span>
                  </div>
                </>
              ) : (
                <>
                  <span className="absolute left-[0px] w-[20px] h-[2px] bg-white rounded-lg rotate-45 transition-transform duration-500 ease-in-out "></span>
                  <span className="absolute left-[0px] w-[20px] h-[2px] bg-white rounded-lg -rotate-45 transition-transform duration-500 ease-in-out  "></span>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
