import Link from "next/link";
import { links } from "./data";
import s from "./Navbar.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  openFlyout: () => void;
}

export default function Navbar({ openFlyout }: NavbarProps) {
  return (
    <>
      <nav className={s.navbar}>
        <Links />
        <button className={s.hamburger} onClick={openFlyout}>
          <div className={s.line} />
          <div className={s.line} />
          <div className={s.line} />
        </button>
      </nav>
    </>
  );
}

interface FlyoutProps {
  flyoutActive: boolean;
  closeFlyout: () => void;
}

export const Flyout = ({ flyoutActive, closeFlyout }: FlyoutProps) => {
  return (
    <aside className={`${s.flyout} ${flyoutActive && s.active}`}>
      <button className={s.close} onClick={closeFlyout}>
        <IoCloseOutline />
      </button>
      <Links />
    </aside>
  );
};

const Links = () => (
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
);
