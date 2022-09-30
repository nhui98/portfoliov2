import { SOCIAL_LINKS } from "@constants/data";
import Link from "next/link";

import FadeSection from "../../../utils/FadeSection";
import s from "./Sidebar.module.scss";

const Sidebar = () => (
  <FadeSection>
    <div className={s.sidebar}>
      <div className={s.line} />
      <ul className={s.socials}>
        {SOCIAL_LINKS.map(({ href, icon: Icon, id, label }) => (
          <li className={s.social} key={id}>
            <Link href={href} passHref>
              <a target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={s.line} />
    </div>
  </FadeSection>
);

export default Sidebar;
