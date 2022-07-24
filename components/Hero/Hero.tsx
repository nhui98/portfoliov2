import s from "./Hero.module.scss";
import Link from "next/link";

const data = {
  intro: "Hi, my name is",
  name: "Nathan Hui.",
  subtitle: "I build things for the web.",
  about:
    "I'm a Javascript developer focused on front-end technologies such as React to build incredible digital experiences for the web.",
};

export default function Hero() {
  const { intro, name, subtitle, about } = data;

  return (
    <section className={s.hero}>
      <h1 className={s.intro}>{intro}</h1>
      <h2 className={s.name}>{name}</h2>
      <h3 className={s.title}>{subtitle}</h3>
      <p className={s.about}>{about}</p>
      <Link href="/">
        <a className={s.resume}>Resume</a>
      </Link>
    </section>
  );
}
