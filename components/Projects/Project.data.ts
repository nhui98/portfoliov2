import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export const data = {
  counter: "03.",
  title: "Projects",
  projects: [
    {
      id: 1,
      label: "Featured Project",
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
          link: "https://github.com/nhui98/thursdaybootsv2",
        },
        {
          icon: FiExternalLink,
          link: "https://thursdaybootsv2.vercel.app/",
        },
      ],
    },
    {
      id: 2,
      label: "Featured Project",
      productImage: "/images/project3img.png",
      projectTitle: "Netflix Clone",
      projectDescription:
        "Netflix Landing page with authentication and Stripe payments.",
      projectStack: [
        "Next",
        "Typescript",
        "Tailwind",
        "Storybook",
        "Stripe",
        "Firebase",
        "Zustand",
      ],
      links: [
        {
          icon: AiFillGithub,
          link: "https://github.com/nhui98/netflix-clone",
        },
        {
          icon: FiExternalLink,
          link: "https://netflix-clone-cyan-iota.vercel.app",
        },
      ],
    },
    {
      id: 3,
      label: "Featured Project",
      productImage: "/images/project2img.png",
      projectTitle: "Bramblecrest",
      projectDescription:
        "Ecommerce store selling premium outdoor garden furniture.",
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
