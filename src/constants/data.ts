import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const NAVBAR_LINKS = [
  {
    id: 1,
    counter: "01.",
    text: "About",
    href: "/#about",
    fadeDelay: ".25s",
  },
  {
    id: 2,
    counter: "02.",
    text: "Experience",
    href: "/#experience",
    fadeDelay: ".5s",
  },
  {
    id: 3,
    counter: "03.",
    text: "Projects",
    href: "/#projects",
    fadeDelay: ".75s",
  },
  {
    id: 4,
    counter: "04.",
    text: "Contact",
    href: "/#contact",
    fadeDelay: "1s",
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/nathan-hui/",
  },
  {
    id: 2,
    icon: AiOutlineMail,
    href: "mailto:hui.nathan9@gmail.com",
  },
  {
    id: 3,
    icon: AiFillGithub,
    href: "https://github.com/nhui98",
  },
];

export const SKILLS = [
  "JavaScript (ES6+)",
  "Typescript",
  "SASS",
  "Tailwind",
  "React",
  "Next",
  "GraphQL",
  "Storybook",
];

export const COMPANY_EXPERIENCE = [
  {
    id: 1,
    company: "Red Technology",
    position: "Web Developer",
    date: "October 2021 - April 2022",
    responsibilities: [
      "Developed a responsive, accessible and SEO friendly B2C ecommerce website using HTML, CSS, Javascript, jQuery and Bootstrap.",
      "Contributed to the building and testing of re-usable components, as well integrating with 3rd party software across multiple new and existing projects.",
      "Continuously improve and add functionality to in-house class leading ecommerce platform for which all new and existing projects are built from.",
      "Collaborate with UI/UX Designers and Project Managers ensuring specifications are satisfied and deadlines are met.",
    ],
  },
  {
    id: 2,
    company: "Opium Restuarant",
    position: "Bartender",
    date: "June 2020 - September 2021",
    responsibilities: [
      "Deliver constistent high quality customer service during peak hours contributing to positive customer feedback and reviews.",
      "Mentor and train new bar staff.",
    ],
  },
];
