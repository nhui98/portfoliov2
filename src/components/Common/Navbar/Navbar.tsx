import { NAVBAR_LINKS } from "@constants/data";
import FadeSection from "@utils/FadeSection";
import { NextPage } from "next";

import NavLink from "../NavLink/NavLink";
import s from "./Navbar.module.scss";

const Navbar: NextPage<NavbarProps> = ({ openFlyout }) => (
  <nav className={s.navbar}>
    <ol className={s.links}>
      {NAVBAR_LINKS.map((link) => (
        <FadeSection key={link.id} delay={link.fadeDelay}>
          <NavLink {...link} />
        </FadeSection>
      ))}
    </ol>
    <button className={s.hamburger} onClick={openFlyout}>
      {new Array(3).fill(1).map((_, i) => (
        <div className={s.line} key={i} />
      ))}
    </button>
  </nav>
);

export default Navbar;

export interface NavbarProps {
  openFlyout: () => void;
}
