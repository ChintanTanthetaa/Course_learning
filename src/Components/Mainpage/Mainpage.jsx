import React, { useState } from "react";
import profile1 from "../../assets/imgs/photo-1472099645785-5658abf4ff4e.avif";
import profile2 from "../../assets/imgs/photo-1491528323818-fdd1faba62cc.avif";
import profile3 from "../../assets/imgs/photo-1500648767791-00dcc994a43e.jpg";
import profile4 from "../../assets/imgs/photo-1550525811-e5869dd03032.avif";
import stars from "../../assets/svg/Stars.svg";
import { HiOutlineChevronDown } from "react-icons/hi";
import LogoMarquee from "./LogoMarquee";

const Popup = ({ onSelect, options, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg">
      {options.map((option) => (
        <div
          key={option}
          className="py-2  px-10 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

const Popup1 = ({ onSelect, options, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg">
      {options.map((option) => (
        <div
          key={option}
          className="py-2  px-10 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

const Mainpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Ethical Hacking");
  const [selectedOption1, setSelectedOption1] = useState("20hrs in a Month");

  const options = [
    "Ethical Hacking  ",
    "UX and UI Design",
    "Front End Development",
    "Back End Development",
  ]; // Your options here

  const options1 = [
    "20hrs in a Month",
    "30hrs in a Month",
    "40hrs in a Month",
    "50hrs in a Month",
  ]; // Your options here

  const togglePopup = () => {
    setIsOpen((prevState) => !prevState);
  };

  const togglePopup1 = () => {
    setIsOpen1((prevState) => !prevState);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSelect1 = (option) => {
    setSelectedOption1(option);
    setIsOpen1(false);
  };

  return (
    <>
      <div className="banner-image">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-5xl pt-28 sm:pt-56 sm:pb-24">
            <div className="text-center">
              <h1 className="lg:text-7xl font-bold text-gray-900 text-3xl ">
                Advance your engineering
                <br />
                skills with our courses
              </h1>
              <p className="mt-6 lg:text-xl text-base leading-8 text-black">
                Build skills with our courses and mentor from world-class
                companies.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="hidden sm:block -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={profile1}
                    alt="profile_image"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={profile2}
                    alt="profile_image"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={profile3}
                    alt="profile_image"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={profile4}
                    alt="profile_image"
                  />
                </div>
                <div className="banner lg:border-l border-[#bebebe]  sm:pl-8">
                  <div className="flex justify-center sm:justify-start">
                    <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                    <img src={stars} alt="stars" />
                  </div>
                  <div className="">
                    <h3 className="text-sm ">Rated by 25k on google.</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-24  lg:max-w-4xl p-10 bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
                <div className="col-span-3">
                  <div className="w-full">
                    <h3 className="text-lg text-gray-500">
                      What do you want to learn?
                    </h3>
                    <div className="relative mt-1">
                      <button
                        type="button"
                        className="relative w-full cursor-default rounded-lg bg-white text-xl py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        onClick={togglePopup}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        <span className="block truncate text-xl font-semibold">
                          {selectedOption}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiOutlineChevronDown />
                        </span>
                      </button>
                      <Popup
                        onSelect={handleSelect}
                        options={options}
                        isOpen={isOpen}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="w-full">
                    <h3 className="text-lg text-gray-500">
                      Hours you going to invest?
                    </h3>
                    <div className="relative mt-1">
                      <button
                        type="button"
                        className="relative w-full cursor-default rounded-lg bg-white text-xl py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                        onClick={togglePopup1}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                      >
                        <span className="block truncate text-xl font-semibold">
                          {selectedOption1}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiOutlineChevronDown />
                        </span>
                      </button>
                      <Popup1
                        onSelect={handleSelect1}
                        options={options1}
                        isOpen={isOpen1}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2 mt-2">
                  <button className="bg-[#502c68] w-full hover:bg-[#502c68] text-white font-bold py-4 px-3 rounded">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center bg-[#FCF6EF]">
            <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-lg my-10 text-gray-500">
                Trusted by companies of all sizes
              </h2>
              <div className="">
                <LogoMarquee />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
