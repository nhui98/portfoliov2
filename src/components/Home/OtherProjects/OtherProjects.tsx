import { OTHER_PROJECTS } from "@constants/data";
import FadeSection from "@utils/FadeSection";
import { NextPage } from "next";
import Link from "next/link";
import { AiFillGithub, AiOutlineFolderOpen } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import s from "./OtherProjects.module.scss";

const OtherProjects = () => (
  <section className={s.otherProjects}>
    <FadeSection direction="up">
      <h2 className={s.heading}>More Projects</h2>
      <ul className={s.grid} aria-label="project">
        {OTHER_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </FadeSection>
  </section>
);

const ProjectCard: NextPage<ProjectCardProps> = ({
  description,
  github,
  stack,
  title,
  website,
}) => (
  <li className={s.projectCard}>
    <div className={s.heading}>
      <div className={s.left}>
        <AiOutlineFolderOpen />
      </div>
      <div className={s.right}>
        <Link href={github} passHref>
          <a className={s.link} target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </Link>
        <Link href={website} passHref>
          <a className={s.link} target="_blank" rel="noreferrer">
            <FiExternalLink />
          </a>
        </Link>
      </div>
    </div>
    <h2 className={s.title}>{title}</h2>
    <p className={s.description}>{description}</p>
    <ul className={s.stack}>
      {stack.map((item) => (
        <li key={item} aria-label="stack">
          {item}
        </li>
      ))}
    </ul>
  </li>
);

export default OtherProjects;

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  github: string;
  website: string;
  stack: string[];
}
