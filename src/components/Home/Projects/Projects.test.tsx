import { PROJECTS } from "@constants/data";
import { render, screen } from "@testing-library/react";

import Projects from "./Projects";

describe("Projects", () => {
  it("contains a header", () => {
    render(<Projects />);

    const header = screen.getByRole("heading", {
      level: 2,
      name: /03. Projects/,
    });
    expect(header).toBeInTheDocument();
  });

  it("displays the correct number of projects", () => {
    render(<Projects />);

    const list = screen.getAllByRole("list");
    expect(list).toHaveLength(PROJECTS.length);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(PROJECTS.length);

    const heading2 = screen.getAllByRole("heading", {
      level: 2,
      name: /Featured Project/,
    });
    expect(heading2).toHaveLength(PROJECTS.length);

    const heading3 = screen.getAllByRole("heading", { level: 3 });
    expect(heading3).toHaveLength(PROJECTS.length);
  });

  it("displays the correct number of technologies used", () => {
    render(<Projects />);

    const numberOfTechnologies = PROJECTS.reduce(
      (num, { projectStack }) => num + projectStack.length,
      0
    );

    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(numberOfTechnologies);
  });
});
