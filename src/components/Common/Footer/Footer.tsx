import { SOCIAL_LINKS } from "@constants/data";
import Link from "next/link";

import s from "./Footer.module.scss";

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.socials}>
      {SOCIAL_LINKS.map(({ href, icon: Icon, id }) => (
        <Link href={href} passHref key={id}>
          <a className={s.social} target="_blank">
            <Icon />
          </a>
        </Link>
      ))}
    </div>
  </footer>
);

export default Footer;
