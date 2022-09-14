import s from "./OtherProjects.module.scss";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub, AiOutlineFolderOpen } from "react-icons/ai";
import Link from "next/link";
import { FadeSection } from "../../utils/FadeSection";
import { projects } from "./OtherProjects.data";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  website: string;
  stack: string[];
}

const ProjectCard = ({
  description,
  github,
  stack,
  title,
  website,
}: ProjectCardProps) => (
  <Link href={website} passHref>
    <a target="_blank" rel="noopener noreferrer" className={s.item}>
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

export default function OtherProjects() {
  return (
    <FadeSection direction="up">
      <section className={s.otherProjects}>
        <h2 className={s.heading}>More Projects</h2>
        <div className={s.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </FadeSection>
  );
}
