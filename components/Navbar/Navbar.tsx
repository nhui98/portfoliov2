import Link from "next/link";
import s from "./Navbar.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { FadeSection } from "../../utils/FadeSection";
import { useRouter } from "next/router";

const links = [
  {
    id: 1,
    counter: "01.",
    text: "About",
    href: "/#about",
    fadeDelay: ".25s",
  },
  {
    id: 2,
    counter: "02.",
    text: "Experience",
    href: "/#experience",
    fadeDelay: ".5s",
  },
  {
    id: 3,
    counter: "03.",
    text: "Projects",
    href: "/#projects",
    fadeDelay: ".75s",
  },
  {
    id: 4,
    counter: "04.",
    text: "Contact",
    href: "/#contact",
    fadeDelay: "1s",
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
          <FadeSection key={link.id} delay={link.fadeDelay}>
            <NavLink {...link} />
          </FadeSection>
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
        <NavLink {...link} closeFlyout={closeFlyout} key={link.id} />
      ))}
    </ol>
  </aside>
);

interface NavlinkProps {
  id: number;
  counter: string;
  href: string;
  text: string;
  closeFlyout?: FlyoutProps["closeFlyout"];
}

const NavLink = ({ counter, href, text, closeFlyout }: NavlinkProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        closeFlyout && closeFlyout();
        router.push(href);
      }}
    >
      <li className={s.link}>
        <span>{counter}</span>
        {text}
      </li>
    </button>
  );
};

export default Navbar;
