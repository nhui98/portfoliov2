import Link from "next/link";
import s from "./Footer.module.scss";
import { data as socialData } from "../Sidebar/Sidebar.data";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.socials}>
        {socialData.map(({ href, icon: Icon, id }) => (
          <Link href={href} passHref key={id}>
            <a className={s.social} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
}
