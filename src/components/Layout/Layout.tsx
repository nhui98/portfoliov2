import Flyout from "@components/Common/Flyout/Flyout";
import Footer from "@components/Common/Footer/Footer";
import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";

import Navbar from "../Common/Navbar/Navbar";
import Sidebar from "../Common/Sidebar/Sidebar";
import s from "./Layout.module.scss";

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const [flyoutActive, setFlyoutActive] = useState(false);
  const [navbarShow, setNavbarShow] = useState(true);

  const openFlyout = () => {
    document.body.style.overflowY = "hidden";
    setFlyoutActive(true);
  };

  const closeFlyout = () => {
    document.body.style.overflowY = "auto";
    setFlyoutActive(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => closeFlyout());

    let prevScrollPosition = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentScrollPosition = window.scrollY;
      prevScrollPosition > currentScrollPosition
        ? setNavbarShow(true)
        : setNavbarShow(false);
      prevScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <div className={s.layout}>
      <Flyout flyoutActive={flyoutActive} closeFlyout={closeFlyout} />
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <button
        className={`${s.overlay} ${flyoutActive && s.active}`}
        onClick={closeFlyout}
      />
      <header className={`${s.header} ${!navbarShow && s.hide}`}>
        <Navbar openFlyout={openFlyout} />
      </header>
      <main className={`${s.content} ${flyoutActive && s.active}`}>
        {children}
      </main>
      <footer className={s.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

interface LayoutProps {
  children: ReactNode;
}
