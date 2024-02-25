import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("should load inside contact component", () => {
  render(<Contact />);

  // const button = screen.getByRole("button");

  const button = screen.getByText("Submit");

  // Assertion
  expect(button).toBeInTheDocument();
});