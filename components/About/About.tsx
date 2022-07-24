import s from "./About.module.scss";
import { TbCircleDotted } from "react-icons/tb";
import SectionHeading from "../SectionHeading/SectionHeading";

export const data = {
  counter: "01.",
  title: "About Me",
  description: `Hi! My name is Nathan and I have a passion for building things for the web. I specialize in front-end development and enjoy bringing designs to life. My interest in web development started when I stumbled upon a site called awwwards, which featured a list of beautifully developed websites by talented software engineers across the world. This opened my eyes to the possibilites of the web and ultimately kickstarted my learning journey.
  `,
  skillDescription: "Technologies I like to work with:",
  skills: [
    "JavaScript (ES6+)",
    "Typescript",
    "SASS",
    "React",
    "Next",
    "Storybook",
    "GraphQL",
  ],
};

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
