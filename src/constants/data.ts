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
