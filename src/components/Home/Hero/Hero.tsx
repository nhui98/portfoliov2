import FadeSection from "@utils/FadeSection";
import Link from "next/link";

import s from "./Hero.module.scss";

const Hero = () => (
  <FadeSection direction="up">
    <section className={s.hero}>
      <h1 className={s.intro}>Hi, my name is</h1>
      <h2 className={s.name}>Nathan Hui.</h2>
      <h3 className={s.title}>I&apos;m a Web Developer.</h3>
      <p className={s.about}>
        I focus on front-end technologies and frameworks such as JavaScript and
        React to build incredible digital experiences for the web.
      </p>
      <Link href="/documents/resume.pdf">
        <a target="_blank" className={s.resume}>
          Resume
        </a>
      </Link>
    </section>
  </FadeSection>
);

export default Hero;
