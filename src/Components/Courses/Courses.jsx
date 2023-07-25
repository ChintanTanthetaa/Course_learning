import React, { useState } from "react";
import image1 from "../../assets/svg/coursesOne.svg";
import image2 from "../../assets/svg/nodejs.svg";
import image3 from "../../assets/svg/coursesThree.svg";
import image4 from "../../assets/svg/coursesFour.svg";
import image5 from "../../assets/svg/reactnative.svg";

import { MdAccountCircle } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Courses = () => {
  const [isComponent1Visible, setComponent1Visible] = useState(true);
  const [isComponent2Visible, setComponent2Visible] = useState(false);
  const [isComponent3Visible, setComponent3Visible] = useState(false);
  const [isComponent4Visible, setComponent4Visible] = useState(false);
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (component) => {
    if (component === 1) {
      setComponent1Visible(!isComponent1Visible);
      setComponent2Visible(false);
      setComponent3Visible(false);
      setComponent4Visible(false);

      setActiveButton(1);
    } else if (component === 2) {
      setComponent2Visible(!isComponent2Visible);
      setComponent1Visible(false);
      setComponent3Visible(false);
      setComponent4Visible(false);
      setActiveButton(2);
    } else if (component === 3) {
      setComponent3Visible(!isComponent3Visible);
      setComponent1Visible(false);
      setComponent2Visible(false);
      setComponent4Visible(false);
      setActiveButton(3);
    } else if (component === 4) {
      setComponent4Visible(!isComponent4Visible);
      setComponent1Visible(false);
      setComponent2Visible(false);
      setComponent3Visible(false);
      setActiveButton(4);
    }
  };

  const webdevelopemnt = [
    {
      logo: image1,
      language: "HTML, CSS, JS",
      price: "$40",
      title: "HTML, CSS, Javascript Development",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image2,
      language: "Nodejs",
      price: "$21",
      title: "Backend with Node.js and Express.js",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image3,
      language: "Database",
      price: "$26",
      title: "Learn Mongodb with Mongoose",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image4,
      language: "React.js",
      price: "$96",
      title: "Learn React with Redux toolkit",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
  ];
  const mobiledevelopemnt = [
    {
      logo: image5,
      language: "React Native",
      price: "$80",
      title: "Learn React Native with Node.js",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image3,
      language: "Swift",
      price: "$83",
      title: "Full course Learn Swift from Scratch",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image4,
      language: "Flutter",
      price: "$56",
      title: "Full course Flutter App Development",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image2,
      language: "Onsen UI",
      price: "$92",
      title: "Learn Onsen Ui with HTML, CSS",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
  ];
  const Datascience = [
    {
      logo: image2,
      language: "TensorFlow",
      price: "$50",
      title: "Full course Learn TensorFlow with SQL",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image4,
      language: "AWS",
      price: "$43",
      title: "Full course AWS Deep Learning AMI",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image1,
      language: "Bokeh",
      price: "$96",
      title: "Full course Learn Bokeh with Python",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image3,
      language: "Scikit",
      price: "$22",
      title: "Learn Scikit with Python Development",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
  ];
  const Cloudcomputing = [
    {
      logo: image3,
      language: "Laas",
      price: "$50",
      title: "Infra-as-a-Service",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image4,
      language: "Iaas",
      price: "$43",
      title: "Info-as-a-Service ",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image3,
      language: "Paas",
      price: "$96",
      title: "Platform-as-a-Service",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
    {
      logo: image1,
      language: "Saas",
      price: "$22",
      title: "Software-as-a-Service",
      module: "12 Classes",
      people: "120",
      rating: "4.5",
    },
  ];
  return (
    <div className=" bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:flex justify-between items-center pb-12">
          <div className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4 ">
            <h1 className="">Popular Courses</h1>
          </div>
          <div>
            <button className="bg-transparent hover:bg-[#5a1855] text-[#5a1855] font-medium hover:text-white py-3 px-4 border border-[#5a1855] hover:border-transparent rounded">
              Explore Classes
            </button>
          </div>
        </div>
        <div className="flex  space-x-5 rounded-xl bg-white p-1 overflow-x-auto mb-10">
          <button
            className={`${
              activeButton === 1
                ? "font-bold border-b-2 border-[#fdd281]"
                : "text-black"
            } pb-2 text-lg hidden sm:block`}
            onClick={() => handleButtonClick(1)}
          >
            Web Development
          </button>
          <button
            className={`${
              activeButton === 2
                ? "font-bold border-b-2 border-[#fdd281]"
                : "text-lightgrey"
            } pb-2 text-lg hidden sm:block`}
            onClick={() => handleButtonClick(2)}
          >
            Mobile Development
          </button>
          <button
            className={`${
              activeButton === 3
                ? "font-bold border-b-2 border-[#fdd281]"
                : "text-lightgrey"
            } pb-2 text-lg hidden sm:block`}
            onClick={() => handleButtonClick(3)}
          >
            Data Science
          </button>
          <button
            className={`${
              activeButton === 4
                ? "font-bold border-b-2 border-[#fdd281]"
                : "text-lightgrey"
            } pb-2 text-lg hidden sm:block`}
            onClick={() => handleButtonClick(4)}
          >
            Cloud Computing
          </button>
        </div>
        <div>
          <div className="flex flex-wrap gap-5">
            {isComponent1Visible &&
              webdevelopemnt.map((e) => (
                <div className="w-72 ">
                  <div>
                    <img src={e.logo} alt="courselogo" className="h-64" />
                  </div>
                  <div className="flex justify-between pt-2">
                    <h3>{e.language}</h3>
                    <p className="border border-[#94df63] text-[#94df63] font-bold p-1 rounded-lg">
                      {e.price}
                    </p>
                  </div>
                  <div className="text-xl font-bold pt-2 pb-2">{e.title}</div>
                  <div className="flex justify-between border-2 border-[#bebebe] rounded  p-1">
                    <div className="">
                      <p>{e.module}</p>
                    </div>
                    <div className="flex ">
                      <div className="flex justify-center items-center">
                        <MdAccountCircle className="text-[#dfd363]" size={20} />
                        <p>{e.people}</p>
                      </div>
                      <div className="px-3 flex justify-center items-center">
                        <AiFillStar className="text-[#dfd363]" size={20} />
                        <p>{e.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {isComponent2Visible &&
              mobiledevelopemnt.map((e) => (
                <div className="w-72 ">
                  <div>
                    <img src={e.logo} alt="courselogo" className="h-64" />
                  </div>
                  <div className="flex justify-between pt-2">
                    <h3>{e.language}</h3>
                    <p className="border border-[#94df63] text-[#94df63] font-bold p-1 rounded-lg">
                      {e.price}
                    </p>
                  </div>
                  <div className="text-xl font-bold pt-2 pb-2">{e.title}</div>
                  <div className="flex justify-between border-2 border-[#bebebe] rounded  p-1">
                    <div className="">
                      <p>{e.module}</p>
                    </div>
                    <div className="flex ">
                      <div className="flex justify-center items-center">
                        <MdAccountCircle className="text-[#dfd363]" size={20} />
                        <p>{e.people}</p>
                      </div>
                      <div className="px-3 flex justify-center items-center">
                        <AiFillStar className="text-[#dfd363]" size={20} />
                        <p>{e.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {isComponent3Visible &&
              Datascience.map((e) => (
                <div className="w-72 ">
                  <div>
                    <img src={e.logo} alt="courselogo" className="h-64" />
                  </div>
                  <div className="flex justify-between pt-2">
                    <h3>{e.language}</h3>
                    <p className="border border-[#94df63] text-[#94df63] font-bold p-1 rounded-lg">
                      {e.price}
                    </p>
                  </div>
                  <div className="text-xl font-bold pt-2 pb-2">{e.title}</div>
                  <div className="flex justify-between border-2 border-[#bebebe] rounded  p-1">
                    <div className="">
                      <p>{e.module}</p>
                    </div>
                    <div className="flex ">
                      <div className="flex justify-center items-center">
                        <MdAccountCircle className="text-[#dfd363]" size={20} />
                        <p>{e.people}</p>
                      </div>
                      <div className="px-3 flex justify-center items-center">
                        <AiFillStar className="text-[#dfd363]" size={20} />
                        <p>{e.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-wrap gap-5">
            {isComponent4Visible &&
              Cloudcomputing.map((e) => (
                <div className="w-72 ">
                  <div>
                    <img src={e.logo} alt="courselogo" className="h-64" />
                  </div>
                  <div className="flex justify-between pt-2">
                    <h3>{e.language}</h3>
                    <p className="border border-[#94df63] text-[#94df63] font-bold p-1 rounded-lg">
                      {e.price}
                    </p>
                  </div>
                  <div className="text-xl font-bold pt-2 pb-2">{e.title}</div>
                  <div className="flex justify-between border-2 border-[#bebebe] rounded  p-1">
                    <div className="">
                      <p>{e.module}</p>
                    </div>
                    <div className="flex ">
                      <div className="flex justify-center items-center">
                        <MdAccountCircle className="text-[#dfd363]" size={20} />
                        <p>{e.people}</p>
                      </div>
                      <div className="px-3 flex justify-center items-center">
                        <AiFillStar className="text-[#dfd363]" size={20} />
                        <p>{e.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
