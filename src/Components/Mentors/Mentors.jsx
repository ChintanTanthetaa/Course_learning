import React from "react";
import image1 from "../../assets/svg/boy1.svg";
import image2 from "../../assets/svg/boy2.svg";
import image3 from "../../assets/svg/boy3.svg";
import image4 from "../../assets/svg/boy4.svg";
import image5 from "../../assets/svg/boy5.svg";
import image6 from "../../assets/svg/girl1.svg";
import { MdAccountCircle } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Mentors = () => {
  const webdevelopemnt = [
    {
      logo: image1,
      Name: "Jane Doe",
      title: "Senior UX Designer",
    },
    {
      logo: image2,
      Name: "Olivia Jerry",
      title: "Photoshop Instructor",
    },
    {
      logo: image3,
      Name: "Tanzeel Ur Rehman",
      title: "SEO Expert",
    },
    {
      logo: image4,
      Name: "Daniel Walter Scott",
      title: "UI/UX Designer",
    },
    {
      logo: image5,
      Name: "Brad Schiff",
      title: "Web Development",
    },
    {
      logo: image6,
      Name: "Andrew Williams",
      title: "Adobe Certified Instructor",
    },
  ];
  return (
    <div>
      <div className=" bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex justify-between items-center pb-12">
            <div className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4 ">
              <h1 className="">Popular Courses</h1>
            </div>
            <div>
              <button className="bg-transparent hover:bg-[#5a1855] text-[#5a1855] font-medium hover:text-white py-3 px-4 border border-[#5a1855] hover:border-transparent rounded">
                Explore 10+ our Mentor
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            {webdevelopemnt.map((e) => (
              <div className="w-[43vh] flex flex-col justify-center items-center ">
                <div className="mb-2">
                  <img src={e.logo} alt="courselogo" className="h-full" />
                </div>
                <div className=" font-semibold text-center  bg-[#eb9f9f] rounded-lg w-60 p-1 ">
                  {e.title}
                </div>
                <div className="text-xl font-bold text-center">{e.Name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
