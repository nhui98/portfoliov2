import FadeSection from "@utils/FadeSection";
import { NextPage } from "next";

import s from "./SectionHeading.module.scss";

const SectionHeading: NextPage<SectionHeadingProps> = ({ counter, title }) => (
  <FadeSection direction="left">
    <h2 className={s.heading}>
      <span className={s.counter}>{counter}</span>
      <span className={s.title}>{title}</span>
      <span className={s.line} />
    </h2>
  </FadeSection>
);

export default SectionHeading;

interface SectionHeadingProps {
  counter: string;
  title: string;
}
