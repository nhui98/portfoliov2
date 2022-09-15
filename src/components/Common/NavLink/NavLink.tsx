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
    <button onClick={handleCloseFlyout}>
      <li className={s.link}>
        <span>{counter}</span>
        {text}
      </li>
    </button>
  );
};

export default NavLink;

interface NavlinkProps {
  id: number;
  counter: string;
  href: string;
  text: string;
  closeFlyout?: () => void;
}
