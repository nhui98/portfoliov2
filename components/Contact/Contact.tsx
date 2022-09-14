import Link from "next/link";
import { FadeSection } from "../../utils/FadeSection";
import { data } from "./Contact.data";
import s from "./Contact.module.scss";

export default function Contact() {
  const { btnLink, btnText, counter, description, subtitle, title } = data;
  return (
    <section className={s.contact} id="contact">
      <FadeSection direction="up" delay=".25s">
        <h1 className={s.title}>
          <span className={s.counter}>{counter}</span>
          {title}
        </h1>
      </FadeSection>
      <FadeSection direction="up" delay=".4s">
        <h2 className={s.subtitle}>{subtitle}</h2>
      </FadeSection>
      <FadeSection direction="up" delay=".55s">
        <p className={s.description}>{description}</p>
      </FadeSection>
      <FadeSection direction="up" delay=".7s">
        <div className={s.link}>
          <Link href={btnLink}>
            <a>{btnText}</a>
          </Link>
        </div>
      </FadeSection>
    </section>
  );
}
