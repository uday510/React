import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"


describe("Contact Component", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load inside contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    //      (or)
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});

