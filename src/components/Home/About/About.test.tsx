import { SKILLS } from "@constants/data";
import { render, screen } from "@testing-library/react";

import About from "./About";

describe("About", () => {
  it("contains a header", () => {
    render(<About />);

    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });

  it("displays the correct number of skills", () => {
    render(<About />);

    const skills = screen.getAllByRole("listitem");
    expect(skills).toHaveLength(SKILLS.length);
  });

  it("contains image", () => {
    render(<About />);

    const image = screen.getByRole("img", { name: /me/ });
    expect(image).toBeInTheDocument();
  });
});
