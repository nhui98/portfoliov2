import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Projects.module.scss";
import Link from "next/link";
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

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

export default function Projects() {
  const { counter, title, projects } = data;

  return (
    <section className={s.projects} id="projects">
      <SectionHeading counter={counter} title={title} />
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </section>
  );
}

interface ProjectItemProps {
  id: number;
  label: string;
  productImage: string;
  projectTitle: string;
  projectDescription: string;
  projectStack: string[];
  links: {
    icon: IconType;
    link: string;
  }[];
}

const ProjectItem = ({
  id,
  label,
  productImage,
  projectTitle,
  projectDescription,
  projectStack,
  links,
}: ProjectItemProps) => {
  const altClass = id % 2 === 0 && s.alt;

  return (
    <div className={s.project}>
      <div className={`${s.image} ${altClass} golden-overlay`}>
        <img src={productImage} alt={projectTitle} />
      </div>
      <div className={`${s.details} ${altClass}`}>
        <h1 className={s.label}>{label}</h1>
        <h2 className={s.name}>{projectTitle}</h2>
        <div className={s.description}>
          <p>{projectDescription}</p>
          <ul className={`${s.stack}  ${altClass}`}>
            {projectStack.map((item) => (
              <li className={s.item} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${s.links} ${altClass}`}>
          {links.map(({ icon: Icon, link }, i) => (
            <Link href={link} passHref key={i}>
              <a className={s.link} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
