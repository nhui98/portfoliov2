import s from "./Hero.module.scss";
import Link from "next/link";

const data = {
  intro: "Hi, my name is",
  name: "Nathan Hui.",
  subtitle: "I'm a Web Developer.",
  about:
    "I focus on front-end technologies and frameworks such as JavaScript and React to build incredible digital experiences for the web.",
  resumeText: "Resume",
  resumeLink: "/documents/resume.pdf",
};

export default function Hero() {
  const { intro, name, subtitle, about, resumeLink, resumeText } = data;

  return (
    <section className={s.hero}>
      <h1 className={s.intro}>{intro}</h1>
      <h2 className={s.name}>{name}</h2>
      <h3 className={s.title}>{subtitle}</h3>
      <p className={s.about}>{about}</p>
      <Link href={resumeLink}>
        <a className={s.resume}>{resumeText}</a>
      </Link>
    </section>
  );
}
