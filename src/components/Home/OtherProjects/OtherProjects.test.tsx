import { OTHER_PROJECTS } from "@constants/data";
import { render, screen } from "@testing-library/react";

import OtherProjects from "./OtherProjects";

describe("Other Projects", () => {
  it("displays the correct number of projects", () => {
    render(<OtherProjects />);

    const projects = screen.getAllByRole("list", { name: /project/ });
    expect(projects).toHaveLength(OTHER_PROJECTS.length);
  });

  it("displays the correct number of skills used per project", () => {
    render(<OtherProjects />);

    const numberOfSkills = OTHER_PROJECTS.reduce(
      (acc, { stack }) => acc + stack.length,
      0
    );

    const skills = screen.getAllByRole("listitem", { name: /stack/ });
    expect(skills).toHaveLength(numberOfSkills);
  });
});
