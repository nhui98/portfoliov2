import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Experience.module.scss";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TbCircleDotted } from "react-icons/tb";

export const data = {
  counter: "02.",
  title: "Work Experience",
  companies: [
    {
      id: 1,
      company: "Red Technology",
      position: "Web Developer",
      date: "October 2021 - April 2022",
      responsibilities: [
        "Developed a responsive, accessible and SEO friendly B2C ecommerce website using HTML, CSS, Javascript, jQuery and Bootstrap.",
        "Contributed to the building and testing of re-usable components, as well integrating with 3rd party software across multiple new and existing projects.",
        "Continuously improve and add functionality to in-house class leading ecommerce platform for which all new and existing projects are built from.",
        "Collaborate with UI/UX Designers and Project Managers ensuring specifications are satisfied and deadlines are met.",
      ],
    },
    {
      id: 2,
      company: "Opium Restuarant",
      position: "Bartender",
      date: "June 2020 - September 2021",
      responsibilities: [
        "Deliver constistent high quality customer service during peak hours contributing to positive customer feedback and reviews.",
        "Mentor and train new bar staff.",
      ],
    },
  ],
};

export default function Experience() {
  const { title, counter, companies } = data;
  const [active, setActive] = useState(1);

  return (
    <section className={s.experience} id="experience">
      <SectionHeading counter={counter} title={title} />
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
