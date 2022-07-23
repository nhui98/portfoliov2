import s from "./About.module.scss";
import { data } from "./data";
import { TbCircleDotted } from "react-icons/tb";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function About() {
  const { counter, title, description, skillDescription, skills } = data;
  return (
    <section className={s.about} id="about">
      <SectionHeading counter={counter} title={title} />
      <div className={s.container}>
        <div className={s.left}>
          <p>{description}</p>
          <p>{skillDescription}</p>
          <ol className={s.skills}>
            {skills.map((skill, i) => (
              <li key={i} className={s.skill}>
                <TbCircleDotted /> {skill}
              </li>
            ))}
          </ol>
        </div>
        <div className={s.right}>
          <div className={s.wrapper}>
            <div className={s.image}>
              <img src="/images/me.jpg" alt="me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
