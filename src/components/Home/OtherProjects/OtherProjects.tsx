import { OTHER_PROJECTS } from "@constants/data";

import FadeSection from "../../../utils/FadeSection";
import ProjectCard from "../ProjectCard/ProjectCard";
import s from "./OtherProjects.module.scss";

const OtherProjects = () => (
  <FadeSection direction="up">
    <section className={s.otherProjects}>
      <h2 className={s.heading}>More Projects</h2>
      <div className={s.grid}>
        {OTHER_PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  </FadeSection>
);

export default OtherProjects;
