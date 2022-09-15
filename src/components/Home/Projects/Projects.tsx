import { PROJECTS } from "@constants/data";

import FadeSection from "../../../utils/FadeSection";
import Project from "../Project/Project";
import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Projects.module.scss";

const Projects = () => (
  <section className={s.projects} id="projects">
    <SectionHeading counter="03." title="Projects" />
    {PROJECTS.map((project) => (
      <FadeSection direction="up" key={project.id}>
        <Project {...project} />
      </FadeSection>
    ))}
  </section>
);

export default Projects;
