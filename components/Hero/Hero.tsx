import s from "./Hero.module.scss";
import { data } from "./data";
import Link from "next/link";

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
