import Link from "next/link";
import { FadeSection } from "../../utils/FadeSection";
import { data } from "./Sidebar.data";
import s from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <FadeSection>
      <div className={s.sidebar}>
        <div className={s.line} />
        <div className={s.socials}>
          {data.map(({ href, icon: Icon, id }) => (
            <Link href={href} passHref key={id}>
              <a className={s.social} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </Link>
          ))}
        </div>
        <div className={s.line} />
      </div>
    </FadeSection>
  );
}
