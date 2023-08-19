import React, { useEffect, useState } from "react";
import logo from "../../assets/imgs/Screenshot_2023-07-25_103308-removebg-preview.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-[#FCF6EF]");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [signinpopup, setSigninpopup] = useState(false);
  const [registerpopup, setRegisterpopup] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Componentopen = () => {
    setIsPopupOpen(true);
  };

  const Signinpopupopen = () => {
    setSigninpopup(true);
  };

  const Signinpopupclose = () => {
    setSigninpopup(false);
  };

  const Ragisterpopupopen = () => {
    setRegisterpopup(true);
  };

  const Ragisterpopupclose = () => {
    setRegisterpopup(false);
  };

  const Componentclose = () => {
    setIsPopupOpen(false);
    setSigninpopup(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setNavbarColor("bg-white shadow-xl");
      } else {
        setNavbarColor("bg-[#FCF6EF]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`transition-all duration-300 p-3 ${navbarColor} fixed w-full top-0 z-30 `}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="relative flex justify-between">
            <div className="flex justify-center items-center">
              <div className="flex items-center">
                <img className="h-16" src={logo} alt="Courses-Logo" />
              </div>
              <div className="hidden sm:ml-14 md:block">
                <div className="flex justify-center items-center space-x-4">
                  <a
                    className="text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                    aria-current="page"
                    href="/#courses-section"
                  >
                    Courses
                  </a>
                  <a
                    className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                    aria-current="page"
                    href="/#mentors-section"
                  >
                    Mentors
                  </a>
                  <a
                    className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                    aria-current="page"
                    href="/#testimonial-section"
                  >
                    Testimonial
                  </a>
                  <a
                    className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                    aria-current="page"
                    href="/#join-section"
                  >
                    Join
                  </a>
                  <div className="hidden md:block">
                    <button
                      className="text-15px font-medium space-links"
                      type="button"
                      onClick={Componentopen}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <button
                  className="text-base font-medium"
                  type="button"
                  onClick={Signinpopupopen}
                >
                  Sign In
                </button>
              </div>
              <div className="hidden md:block">
                <button
                  className="bg-[#502c68] hover:bg-[#502c68] hover:text-white text-base font-medium ml-8 py-4 px-5 rounded"
                  type="button"
                  onClick={Ragisterpopupopen}
                >
                  Register
                </button>
              </div>
              <div className="md:hidden">
                <button className="p-2" onClick={toggleMenu}>
                  {showMenu ? (
                    <AiOutlineClose className="text-2xl" />
                  ) : (
                    <AiOutlineMenu className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Menu */}
        {showMenu && (
          <div
            className="md:hidden h-[100vh] fixed'
        "
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex justify-center items-center flex-col space-y-4 py-4">
                <a
                  className="text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                  href="/#courses-section"
                >
                  Courses
                </a>
                <a
                  className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                  href="/#mentors-section"
                >
                  Mentors
                </a>
                <a
                  className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                  href="/#testimonial-section"
                >
                  Testimonial
                </a>
                <a
                  className="hover:text-[#5a1855] px-3 py-4 text-15px font-medium space-links"
                  aria-current="page"
                  href="/#join-section"
                >
                  Join
                </a>
                <button
                  className="text-15px font-medium space-links"
                  onClick={Componentopen}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isPopupOpen ? (
        <>
          <div className="fixed flex items-center md:ml-[25vh] lg:ml-[75vh] mt-20 z-[999999] p-2">
            <div className="bg-white md:w-[48vh] md:p-5 p-3 rounded-3xl">
              <div className="flex flex-col justify-center items-center text-center md:gap-5 ">
                <img className="h-20" src={logo} alt="Courses-Logo" />
                <h1 className="md:text-xl text-xl font-semibold">
                  Contact us now? Want to send us a feedback?
                </h1>
              </div>
              <div className="mt-5">
                <label className="block">Name</label>
                <input
                  type="text"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  name="bostatus"
                  placeholder="Name..."
                ></input>
                <label className="block">Email</label>
                <input
                  type="email"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  name="bostatus"
                  placeholder="xyz@gmail.com"
                ></input>
                <label className="block">Message</label>
                <textarea
                  type="text"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  placeholder="Leave a comment...."
                ></textarea>
              </div>
              <div className="mt-5 text-center bg-[#4e1358] text-white p-2 rounded-md cursor-pointer ">
                <button type="button" className="">
                  Send message
                </button>
              </div>
              <div
                className="pt-5 text-sm text-[#2a0431] font-medium flex justify-end cursor-pointer"
                onClick={Componentclose}
              >
                Got it, thanks!
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {signinpopup ? (
        <>
          <div className="fixed flex items-center md:ml-[25vh] lg:ml-[75vh] mt-20 z-[999999] p-2">
            <div className="bg-white md:w-[48vh] md:p-10 p-5 rounded-3xl">
              <div className="flex flex-col justify-center items-center text-center md:gap-7 md:p-3">
                <img className="h-20" src={logo} alt="Courses-Logo" />
                <h1 className="md:text-4xl text-xl font-bold">
                  Sign in to your account
                </h1>
              </div>
              <div className="mt-10">
                <label className="block">Email</label>
                <input
                  type="email"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  name="bostatus"
                  placeholder="Email address"
                ></input>
                <label className="block">Password</label>
                <input
                  type="password"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  name="bostatus"
                  placeholder="Passwoed"
                ></input>
              </div>
              <div className="mt-5 text-center flex  items-center bg-[#4e1358] text-white p-2 rounded-md cursor-pointer ">
                <FaLock size={20} />
                <button type="button" className="px-32">
                  Sign In
                </button>
              </div>
              <div
                className="pt-5 text-sm text-[#2a0431] font-medium flex justify-end cursor-pointer"
                onClick={Signinpopupclose}
              >
                Got it, thanks!
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {registerpopup ? (
        <>
          <div className="fixed flex items-center md:ml-[25vh] lg:ml-[75vh] mt-20 z-[999999] p-2">
            <div className="bg-white md:w-[48vh] md:p-10 p-5 rounded-3xl">
              <div className="flex flex-col justify-center items-center text-center md:gap-7 md:p-3">
                <img className="h-20" src={logo} alt="Courses-Logo" />
                <h1 className="md:text-4xl text-xl font-bold">
                  Register your account
                </h1>
              </div>
              <div className="mt-10">
                <label className="block">Email</label>
                <input
                  type="email"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  name="bostatus"
                  placeholder="Email address"
                ></input>
                <label className="block">Password</label>
                <input
                  type="password"
                  className=" outline-none border-[#d4d4d4]  rounded-md w-full border  p-2 mb-3 mt-1"
                  name="bostatus"
                  placeholder="Passwoed"
                ></input>
                <input type="checkbox" />
                <label for="vehicle1" className="px-2">
                  Remember me
                </label>
              </div>
              <div className="mt-5 text-center flex  items-center bg-[#4e1358] text-white p-2 rounded-md cursor-pointer ">
                <FaLock size={20} />
                <button type="button" className="px-32">
                  Sign In
                </button>
              </div>
              <div
                className="pt-5 text-sm text-[#2a0431] font-medium flex justify-end cursor-pointer"
                onClick={Ragisterpopupclose}
              >
                Got it, thanks!
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
