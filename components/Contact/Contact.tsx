import Link from "next/link";
import { FadeSection } from "../../utils/FadeSection";
import s from "./Contact.module.scss";

export const data = {
  counter: "04.",
  title: "Contact me",
  subtitle: "Lets get in touch",
  description:
    "Feel free to shoot me an email if you have any questions or just want to talk. Don't worry I wont bite :)",
  btnText: "Message me",
  btnLink: "mailto:hui.nathan9@gmail.com",
};

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
      <FadeSection direction="up" delay=".5s">
        <h2 className={s.subtitle}>{subtitle}</h2>
      </FadeSection>
      <FadeSection direction="up" delay=".75s">
        <p className={s.description}>{description}</p>
      </FadeSection>
      <FadeSection direction="up" delay="1s">
        <div className={s.link}>
          <Link href={btnLink}>
            <a>{btnText}</a>
          </Link>
        </div>
      </FadeSection>
    </section>
  );
}
