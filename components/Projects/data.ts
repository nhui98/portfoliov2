import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

export const data = {
  counter: "03.",
  title: "Projects",
  projects: [
    {
      id: 1,
      productImage: "/images/project1img.png",
      projectTitle: "Thursday Boots",
      projectDescription: "Ecommerce website selling high quality footwear.",
      projectStack: [
        "Next",
        "Typescript",
        "SASS Modules",
        "Storybook",
        "GraphQL",
        "Mongoose",
      ],
      links: [
        {
          icon: AiFillGithub,
          link: "https://thursdaybootsv2.vercel.app/",
        },
        {
          icon: FiExternalLink,
          link: "https://github.com/nhui98/thursdaybootsv2",
        },
      ],
    },
    {
      id: 2,
      productImage: "/images/project2img.png",
      projectTitle: "Bramblecrest",
      projectDescription:
        "Ecommerce store selling high quality outdoor garden furniture.",
      projectStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
        "Bootstrap",
        "VB .Net",
      ],
      links: [
        {
          icon: FiExternalLink,
          link: "https://www.bramblecrest.com/",
        },
      ],
    },
  ],
};
