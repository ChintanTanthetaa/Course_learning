import React from "react";
import image1 from "../../assets/imgs/profile1.jpg";
import image2 from "../../assets/imgs/profile2.jpg";
import image3 from "../../assets/imgs/profile3.jpg";
import image4 from "../../assets/imgs/profile4.jpg";
import image5 from "../../assets/imgs/profile5.jpg";
import image6 from "../../assets/imgs/profile6.jpg";
import starlogo from "../../assets/imgs/stars.png";
import Carousel from "better-react-carousel";

const Studentsreview = () => {
  const webdevelopemnt = [
    {
      id: 1,
      logo: image1,
      Name: "Jane Doe",
      title: "Senior UX Designer",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 2,
      logo: image2,
      Name: "Olivia Jerry",
      title: "Photoshop Instructor",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 3,
      logo: image3,
      Name: "Tanzeel Ur Rehman",
      title: "SEO Expert",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 4,
      logo: image4,
      Name: "Daniel Walter Scott",
      title: "UI/UX Designer",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 5,
      logo: image5,
      Name: "Brad Schiff",
      title: "Web Development",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 6,
      logo: image6,
      Name: "Andrew Williams",
      title: "Adobe Certified Instructor",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 7,
      logo: image4,
      Name: "Daniel Walter Scott",
      title: "UI/UX Designer",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 8,
      logo: image5,
      Name: "Brad Schiff",
      title: "Web Development",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
    {
      id: 9,
      logo: image6,
      Name: "Andrew Williams",
      title: "Adobe Certified Instructor",
      starts: starlogo,
      paragraph:
        " I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
    },
  ];

  return (
    <div>
      <div className=" bg-[#FCF6EF] ">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex justify-between items-center pb-12">
            <div className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4 ">
              <h1 className="lg:w-96">What Our Happy Students Says</h1>
            </div>
            <div>
              <button className="bg-transparent hover:bg-[#5a1855] text-[#5a1855] font-medium hover:text-white py-3 px-4 border border-[#5a1855] hover:border-transparent rounded">
                Give Your Review
              </button>
            </div>
          </div>
          <div className="mb-20">
            <p className="text-xl">
              Build skills with our courses and mentor from world-class
              companies.
            </p>
          </div>

          <div className="mb-20 ">
            <Carousel
              cols={3}
              rows={1}
              loop={true}
              dot
              autoplay={2000}

            >
              {webdevelopemnt.map((e, index) => (
                <Carousel.Item>
                  <div
                    key={index}
                    className="w-[35vh]  flex flex-col justify-center items-center bg-white gap-3 p-5 mx-6 rounded-xl"
                  >
                    <div className=" ">
                      <img src={e.logo} alt="courselogo" className="h-24" />
                    </div>
                    <div className="   text-center  ">
                      <p className="text-base   ">{e.title}</p>
                    </div>
                    <div className="text-xl font-bold text-center">
                      {e.Name}
                    </div>
                    <div>
                      <img src={e.starts} alt="courselogo" className="" />
                    </div>
                    <p className="lg:w-60 text-justify">{e.paragraph}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentsreview;
