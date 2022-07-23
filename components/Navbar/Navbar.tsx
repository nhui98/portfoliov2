import Link from "next/link";
import { links } from "./data";
import s from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <ol className={s.links}>
        {links.map(({ id, href, text }) => (
          <li className={s.link} key={id}>
            <Link href={href}>
              <a>
                <span>0{id}.</span>
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
