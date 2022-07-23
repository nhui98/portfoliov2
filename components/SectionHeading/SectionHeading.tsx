import s from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  counter: string;
  title: string;
}

const SectionHeading = ({ counter, title }: SectionHeadingProps) => (
  <h2 className={s.heading}>
    <span className={s.counter}>{counter}</span>
    <span className={s.title}>{title}</span>
    <span className={s.line} />
  </h2>
);

export default SectionHeading;
