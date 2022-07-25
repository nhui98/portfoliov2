import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FadeSection } from "../../utils/FadeSection";
import s from "./Sidebar.module.scss";

export const data = [
  {
    id: 1,
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/nathan-hui/",
  },
  {
    id: 2,
    icon: AiOutlineMail,
    href: "mailto:hui.nathan9@gmail.com",
  },
  {
    id: 3,
    icon: AiFillGithub,
    href: "https://github.com/nhui98",
  },
];

export default function Sidebar() {
  return (
    <FadeSection>
      <div className={s.sidebar}>
        <div className={s.line} />
        <div className={s.socials}>
          {data.map(({ href, icon: Icon, id }) => (
            <Link href={href} passHref key={id}>
              <a className={s.social} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </Link>
          ))}
        </div>
        <div className={s.line} />
      </div>
    </FadeSection>
  );
}
