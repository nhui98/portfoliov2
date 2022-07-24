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
      projectTitle: "Beats",
      projectDescription: "Beats Landing page.",
      projectStack: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          icon: AiFillGithub,
          link: "https://github.com/nhui98/beats-landing-page",
        },
        {
          icon: FiExternalLink,
          link: "https://beats-landing-page-eight.vercel.app/",
        },
      ],
    },
  ],
};
