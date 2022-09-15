import { NextPage } from "next";
import Link from "next/link";
import { AiFillGithub, AiOutlineFolderOpen } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import s from "./ProjectCard.module.scss";

const ProjectCard: NextPage<ProjectCardProps> = ({
  description,
  github,
  stack,
  title,
  website,
}) => (
  <Link href={website} passHref>
    <a target="_blank" rel="noopener noreferrer" className={s.projectCard}>
      <div className={s.heading}>
        <div className={s.left}>
          <AiOutlineFolderOpen />
        </div>
        <div className={s.right}>
          <Link href={github} passHref>
            <a className={s.link} target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </Link>
          <Link href={website} passHref>
            <a className={s.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          </Link>
        </div>
      </div>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <ul className={s.stack}>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </a>
  </Link>
);

export default ProjectCard;

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  website: string;
  stack: string[];
}
