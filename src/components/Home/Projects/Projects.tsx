import { PROJECTS } from "@constants/data";
import Image from "next/image";
import Link from "next/link";

import FadeSection from "../../../utils/FadeSection";
import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Projects.module.scss";

const Projects = () => (
  <section className={s.projects} id="projects">
    <SectionHeading counter="03." title="Projects" />
    {PROJECTS.map(
      ({
        id,
        label,
        links,
        productImage,
        projectDescription,
        projectStack,
        projectTitle,
      }) => {
        const altClass = id % 2 === 0 && s.alt;

        return (
          <FadeSection direction="up" key={id}>
            <div className={s.project}>
              <div className={`${s.image} ${altClass} golden-overlay`}>
                <Image layout="fill" src={productImage} alt={projectTitle} />
              </div>
              <div className={`${s.details} ${altClass}`}>
                <h2 className={s.label}>{label}</h2>
                <h3 className={s.name}>{projectTitle}</h3>
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
          </FadeSection>
        );
      }
    )}
  </section>
);

export default Projects;
