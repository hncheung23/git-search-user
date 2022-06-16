import { render, screen } from "@testing-library/react";
import Button from "./button";

test("renders button label", () => {
  const mock = {
    label: "testing",
  };
  render(<Button {...mock} />);
  const element = screen.getByText(/testing/i);
  expect(element).toBeInTheDocument();
});
