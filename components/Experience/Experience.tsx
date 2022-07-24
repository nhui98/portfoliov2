import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Experience.module.scss";
import { data } from "./data";
import React, { useState } from "react";
import { TbCircleDotted } from "react-icons/tb";

export default function Experience() {
  const { title, counter, companies } = data;
  const [active, setActive] = useState(1);

  return (
    <section className={s.experience} id="experience">
      <SectionHeading counter={counter} title={title} />
      <div className={s.work}>
        <ul className={s.companies}>
          {companies.map(({ id, company }) => (
            <li
              key={id}
              className={`${s.company} ${active === id && s.active}`}
              onClick={() => setActive(id)}
            >
              {company}
            </li>
          ))}
        </ul>
        <div className={s.role}>
          {companies.map(({ id, position, date, responsibilities }) => (
            <div key={id} className={`${s.item} ${active === id && s.active}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
