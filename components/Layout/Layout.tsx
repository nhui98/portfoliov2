import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import s from "./Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <Navbar />
      </header>
      <div className={s.content}>{children}</div>
    </div>
  );
}
