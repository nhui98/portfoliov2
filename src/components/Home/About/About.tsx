import { SKILLS } from "@constants/data";
import FadeSection from "@utils/FadeSection";
import { TbCircleDotted } from "react-icons/tb";

import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./About.module.scss";

const About = () => (
  <section className={s.about} id="about">
    <SectionHeading counter="01." title="About Me" />
    <div className={s.container}>
      <div className={s.left}>
        <FadeSection direction="right">
          <p>
            Hi! My name is Nathan and I have a passion for building things for
            the web. I specialize in front-end development and enjoy bringing
            designs to life. My interest in web development started when I
            stumbled upon a site called awwwards, which features an array of
            beautifully developed websites by talented software engineers across
            the world. This opened my eyes to the possibilites of the web and
            ultimately kickstarted my learning journey.
          </p>
          <p>Technologies I like to work with:</p>
          <ol className={s.skills}>
            {SKILLS.map((skill) => (
              <li key={skill} className={s.skill}>
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

export default About;
