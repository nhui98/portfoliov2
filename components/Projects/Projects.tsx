import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Projects.module.scss";
import { data } from "./data";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function Projects() {
  const { counter, title, projects } = data;

  return (
    <div className={s.projects}>
      <SectionHeading counter={counter} title={title} />
      {projects.map(
        ({
          id,
          productImage,
          projectDescription,
          projectStack,
          projectTitle,
          links,
        }) => (
          <div className={`${s.grid} ${id % 2 === 0 && s.alt}`} key={id}>
            <div className={s.image}>
              <img src={productImage} alt={projectTitle} />
            </div>
            <div className={s.details}>
              <h1 className={s.label}>Featured Project</h1>
              <h2 className={s.name}>{projectTitle}</h2>
              <div className={s.description}>
                <p>{projectDescription}</p>
                <ul className={s.stack}>
                  {projectStack.map((item) => (
                    <li className={s.item} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.links}>
                {links.map(({ icon: Icon, link }, i) => (
                  <Link href={link} passHref key={i}>
                    <a
                      className={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
