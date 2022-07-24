import Link from "next/link";
import s from "./Navbar.module.scss";
import { IoCloseOutline } from "react-icons/io5";

const links = [
  {
    id: 1,
    counter: "01.",
    text: "About",
    href: "/#about",
  },
  {
    id: 2,
    counter: "02.",
    text: "Experience",
    href: "/#experience",
  },
  {
    id: 3,
    counter: "04.",
    text: "Projects",
    href: "/#projects",
  },
  {
    id: 4,
    counter: "04.",
    text: "Contact",
    href: "/#contact",
  },
];

interface NavbarProps {
  openFlyout: () => void;
}

const Navbar = ({ openFlyout }: NavbarProps) => (
  <nav className={s.navbar}>
    {
      <ol className={s.links}>
        {links.map((link) => (
          <NavLink {...link} key={link.id} />
        ))}
      </ol>
    }
    <button className={s.hamburger} onClick={openFlyout}>
      {new Array(3).fill(1).map((_, i) => (
        <div className={s.line} key={i} />
      ))}
    </button>
  </nav>
);

interface FlyoutProps {
  flyoutActive: boolean;
  closeFlyout: () => void;
}

export const Flyout = ({ flyoutActive, closeFlyout }: FlyoutProps) => (
  <aside className={`${s.flyout} ${flyoutActive && s.active}`}>
    <button className={s.close} onClick={closeFlyout}>
      <IoCloseOutline />
    </button>
    <ol className={s.links}>
      {links.map((link) => (
        <NavLink {...link} key={link.id} />
      ))}
    </ol>
  </aside>
);

interface NavlinkProps {
  id: number;
  counter: string;
  href: string;
  text: string;
}

const NavLink = ({ counter, href, text }: NavlinkProps) => (
  <li className={s.link}>
    <Link href={href}>
      <a>
        <span>{counter}</span>
        {text}
      </a>
    </Link>
  </li>
);

export default Navbar;
