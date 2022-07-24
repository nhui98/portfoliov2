import Link from "next/link";
import s from "./Contact.module.scss";
import { data } from "./data";

export default function Contact() {
  const { btnLink, btnText, counter, description, subtitle, title } = data;
  return (
    <section className={s.contact} id="contact">
      <h1 className={s.title}>
        <span className={s.counter}>{counter}</span>
        {title}
      </h1>
      <h2 className={s.subtitle}>{subtitle}</h2>
      <p className={s.description}>{description}</p>
      <Link href={btnLink}>
        <a className={s.link}>{btnText}</a>
      </Link>
    </section>
  );
}
