import Link from "next/link";

import FadeSection from "../../../utils/FadeSection";
import s from "./Contact.module.scss";

const Contact = () => (
  <section className={s.contact} id="contact">
    <FadeSection direction="up" delay=".25s">
      <h2 className={s.title}>
        <span className={s.counter}>04.</span>
        Contact me
      </h2>
    </FadeSection>
    <FadeSection direction="up" delay=".4s">
      <h3 className={s.subtitle}>Lets get in touch</h3>
    </FadeSection>
    <FadeSection direction="up" delay=".55s">
      <p className={s.description}>
        Feel free to send me an email if you have any questions or just want to
        talk!
      </p>
    </FadeSection>
    <FadeSection direction="up" delay=".7s">
      <div className={s.link}>
        <Link href="mailto:hui.nathan9@gmail.com">
          <a>Message me</a>
        </Link>
      </div>
    </FadeSection>
  </section>
);

export default Contact;
