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
    <FadeSection direction="up">
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
    </FadeSection>
  );
}
