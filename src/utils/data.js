import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design ",
    projects: "100+",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Web Application Development",
    projects: "20+",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Graphic Design",
    projects: "1K+",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
];

export const workExp = [
  {
    place: "MGA Consulting Ltd",
    tenure: "Dec 2021 - Aug 2022",
    role: "IT Manager",
    detail: `•	Lead the optimum utilization and maintain all IT platforms and systems for business growth.•	
•	and many more...
    `,
  },
  {
    place: "MGA PRIME PROPERTIES Ltd",
    tenure: "Dec 2021 - Aug 2022",
    role: "IT Manager",
    detail: `
    •	 In charge of hardware and software maintenance, installation and troubleshooting/repair.
   •	and many more...
     `,
  },
  {
    place: "Supreme Trust Insurance Brokers",
    tenure: "Dec 2021 - Aug 2022",
    role: "IT Assistant",
    detail: `•	To develop and manage online, and back-end platforms to achieve company objectives. and many more
      `,
  },
];

export const comments = [
  {
    name: "Mike Demosi",
    post: "CEO",
    comment:
      "We've received so many compliments on our new website and graphics, and it's all thanks to this company. Their team is a pleasure to work with, and they have a talent for creating designs that are both beautiful and functional",
    img: "./profile.png",
  },
  {
    name: "David Ameho",
    post: "Accountant",
    comment:
      "I am blown away by the website and graphic design work done by this Mr. Bismark. He truly has a talent for creating beautiful and functional designs that perfectly capture the essence of our brand.",
    img: "./profile.png",
  },
  {
    name: "Harry Asmah",
    post: "Human Resource Manager",
    comment:
      "Working with this guy was a pleasure from start to finish. His work is professional, responsive, and truly talented. He took the time to understand our needs and created a website and graphics that exceeded our expectations.",
    img: "./profile.png",
  },
  {
    name: "Eugene Ben",
    post: "Accountant",
    comment:
      "I can't recommend this guy enough! he has an eye for design that is truly unparalleled. Our new website and graphics have helped us stand out from our competitors and drive more business.",
    img: "./profile.png",
  },
  {
    name: "Ben Darko",
    post: "CEO",
    comment:
      "If you're looking for a website and graphic design company that will go above and beyond to meet your needs, look no further. This company is dedicated to creating beautiful, functional designs that will help your business succeed.",
    img: "./profile.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
