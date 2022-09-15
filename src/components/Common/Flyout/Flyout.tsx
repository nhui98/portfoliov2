import { NAVBAR_LINKS } from "@constants/data";
import { NextPage } from "next";
import { IoCloseOutline } from "react-icons/io5";

import NavLink from "../NavLink/NavLink";
import s from "./Flyout.module.scss";

const Flyout: NextPage<FlyoutProps> = ({ flyoutActive, closeFlyout }) => (
  <aside className={`${s.flyout} ${flyoutActive && s.active}`}>
    <button className={s.close} onClick={closeFlyout}>
      <IoCloseOutline />
    </button>
    <ol className={s.links}>
      {NAVBAR_LINKS.map((link) => (
        <NavLink {...link} closeFlyout={closeFlyout} key={link.id} />
      ))}
    </ol>
  </aside>
);

export default Flyout;

interface FlyoutProps {
  flyoutActive: boolean;
  closeFlyout: () => void;
}
