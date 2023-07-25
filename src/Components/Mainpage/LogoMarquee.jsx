import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/imgs/Amazon-Logo-.png";
import logo2 from "../../assets/imgs/Exxon-Mobil-Logo-.png";
import logo3 from "../../assets/imgs/FedEx-Logo-.png";
import logo4 from "../../assets/imgs/Firefox-Logo-.png";
import logo5 from "../../assets/imgs/Google-Logo-.png";
import logo6 from "../../assets/imgs/IBM-Company-Logo.png";
import logo7 from "../../assets/imgs/Microsoft-Logo-.png";
import logo8 from "../../assets/imgs/Panasonic-Logo-.png";
import logo9 from "../../assets/imgs/Picasa-Logo-.png";
import logo10 from "../../assets/imgs/Samsung-Famous-Logos-.png";

const comanylogo = [
  {
    id: 1,
    logo: logo1,
  },
  {
    id: 2,
    logo: logo2,
  },
  {
    id: 3,
    logo: logo3,
  },
  {
    id: 4,
    logo: logo4,
  },
  {
    id: 5,
    logo: logo5,
  },
  {
    id: 6,
    logo: logo6,
  },
  {
    id: 7,
    logo: logo7,
  },
  {
    id: 8,
    logo: logo8,
  },
  {
    id: 9,
    logo: logo9,
  },
  {
    id: 10,
    logo: logo10,
  },
];
const LogoMarquee = () => {
  return (
    <div className="">
      <Marquee>
        {comanylogo.map((e) => (
          <img key={e.id} src={e.logo} alt="company logo" className="h-20 px-24" />
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
