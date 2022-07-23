import { ReactNode, useState } from "react";
import Navbar, { Flyout } from "../Navbar/Navbar";
import s from "./Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const [flyoutActive, setFlyoutActive] = useState(false);

  const openFlyout = () => {
    document.body.style.overflowY = "hidden";
    setFlyoutActive(true);
  };

  const closeFlyout = () => {
    document.body.style.overflowY = "auto";
    setFlyoutActive(false);
  };

  return (
    <div className={s.layout}>
      <Flyout flyoutActive={flyoutActive} closeFlyout={closeFlyout} />
      <button
        className={`${s.overlay} ${flyoutActive && s.active}`}
        onClick={closeFlyout}
      />
      <header className={s.header}>
        <Navbar openFlyout={openFlyout} />
      </header>
      <main className={`${s.content} ${flyoutActive && s.active}`}>
        {children}
      </main>
    </div>
  );
}
