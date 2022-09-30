import { SOCIAL_LINKS } from "@constants/data";
import Link from "next/link";

import s from "./Footer.module.scss";

const Footer = () => (
  <footer className={s.footer}>
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
  </footer>
);

export default Footer;
