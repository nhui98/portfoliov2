import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Experience.module.scss";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TbCircleDotted } from "react-icons/tb";
import { FadeSection } from "../../utils/FadeSection";
import { data } from "./Experience.data";

export default function Experience() {
  const { title, counter, companies } = data;
  const [active, setActive] = useState(1);

  return (
    <section className={s.experience} id="experience">
      <SectionHeading counter={counter} title={title} />
      <FadeSection direction="up">
        <div className={s.work}>
          <ul className={s.companies}>
            {companies.map(({ id, company }) => (
              <CompanyListItem
                key={id}
                id={id}
                company={company}
                active={active}
                setActive={setActive}
              />
            ))}
          </ul>
          <div className={s.role}>
            {companies.map((company) => (
              <RoleItem active={active} {...company} key={company.id} />
            ))}
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

interface CompanyListItemProps {
  id: number;
  company: string;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const CompanyListItem = ({
  id,
  company,
  active,
  setActive,
}: CompanyListItemProps) => (
  <li
    className={`${s.company} ${active === id && s.active}`}
    onClick={() => setActive(id)}
  >
    {company}
  </li>
);

interface RoleItemProps {
  id: number;
  company: string;
  active: number;
  position: string;
  date: string;
  responsibilities: string[];
}

const RoleItem = ({
  id,
  active,
  position,
  date,
  responsibilities,
}: RoleItemProps) => (
  <div className={`${s.item} ${active === id && s.active}`}>
    <h2 className={s.position}>{position}</h2>
    <div className={s.date}>{date}</div>
    <ul className={s.responsibilities}>
      {responsibilities.map((responsibility, i) => (
        <li key={i} className={s.responsibility}>
          <span>
            <TbCircleDotted />
          </span>
          {responsibility}
        </li>
      ))}
    </ul>
  </div>
);
