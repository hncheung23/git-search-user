import { render, screen } from "@testing-library/react";
import RadioButtonsGroup from "./radioButtonsGroup";

test("renders label", () => {
  const mock = {
    buttons: [
      {
        value: "users",
        label: "USERS",
      },
      {
        value: "organizations",
        label: "ORGANIZATIONS",
      },
    ],
    label: "Search by",
  };
  render(<RadioButtonsGroup {...mock} />);
  const element = screen.getByText(/Search by/i);
  expect(element).toBeInTheDocument();
});

test("renders button", () => {
  const mock = {
    buttons: [
      {
        value: "users",
        label: "USERS",
      },
      {
        value: "organizations",
        label: "ORGANIZATIONS",
      },
    ],
    label: "Search by",
  };
  const elements = [];
  render(<RadioButtonsGroup {...mock} />);
  for (let button of mock.buttons) {
    const element = screen.getByText(button.label);
    elements.push(element);
  }
  expect(elements).toHaveLength(mock.buttons.length);
});
