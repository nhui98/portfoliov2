import s from "./Hero.module.scss";
import Link from "next/link";
import { data } from "./Hero.data";

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
