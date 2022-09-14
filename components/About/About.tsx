import s from "./About.module.scss";
import { TbCircleDotted } from "react-icons/tb";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FadeSection } from "../../utils/FadeSection";
import { data } from "./About.data";

export default function About() {
  const { counter, title, description, skillDescription, skills } = data;

  return (
    <section className={s.about} id="about">
      <SectionHeading counter={counter} title={title} />
      <div className={s.container}>
        <div className={s.left}>
          <FadeSection direction="right">
            <p>{description}</p>
            <p>{skillDescription}</p>
            <ol className={s.skills}>
              {skills.map((skill, i) => (
                <li key={i} className={s.skill}>
                  <TbCircleDotted /> {skill}
                </li>
              ))}
            </ol>
          </FadeSection>
        </div>
        <div className={s.right}>
          <FadeSection direction="left">
            <div className={s.wrapper}>
              <div className={`${s.image} golden-overlay`}>
                <img src="/images/me.jpg" alt="me" />
              </div>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
