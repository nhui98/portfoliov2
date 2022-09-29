import { NextPage } from "next";
import { useRouter } from "next/router";

import s from "./NavLink.module.scss";

const NavLink: NextPage<NavlinkProps> = ({
  counter,
  href,
  text,
  closeFlyout,
}) => {
  const router = useRouter();

  const handleCloseFlyout = () => {
    closeFlyout && closeFlyout();
    router.push(href);
  };

  return (
    <li>
      <button className={s.link} onClick={handleCloseFlyout}>
        <span>{counter}</span>
        {text}
      </button>
    </li>
  );
};

export default NavLink;

export interface NavlinkProps {
  id: number;
  counter: string;
  href: string;
  text: string;
  closeFlyout?: () => void;
}
