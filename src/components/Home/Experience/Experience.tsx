import { COMPANY_EXPERIENCE } from "@constants/data";
import FadeSection from "@utils/FadeSection";
import React, { useState } from "react";
import { TbCircleDotted } from "react-icons/tb";

import SectionHeading from "../SectionHeading/SectionHeading";
import s from "./Experience.module.scss";

const Experience = () => {
  const [active, setActive] = useState(1);

  return (
    <section className={s.experience} id="experience">
      <SectionHeading counter="02." title="Work Experience" />
      <FadeSection direction="up">
        <div className={s.work}>
          {/* Company List */}
          <ul className={s.companies}>
            {COMPANY_EXPERIENCE.map(({ id, company }) => (
              <li
                key={id}
                className={`${s.company} ${active === id && s.active}`}
                onClick={() => setActive(id)}
                aria-label="company"
              >
                {company}
              </li>
            ))}
          </ul>
          {/* Company Details */}
          <div className={s.role}>
            {COMPANY_EXPERIENCE.map(
              ({ id, date, position, responsibilities }) => (
                <div
                  key={id}
                  className={`${s.item} ${active === id && s.active}`}
                >
                  <h3 className={s.position}>{position}</h3>
                  <div className={s.date}>{date}</div>
                  <ul className={s.responsibilities}>
                    {responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className={s.responsibility}
                        aria-label="responsiblity"
                      >
                        <span>
                          <TbCircleDotted />
                        </span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </FadeSection>
    </section>
  );
};

export default Experience;
