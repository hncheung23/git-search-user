import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Textfield from "./textfield";

test("renders textfield input", () => {
  render(<Textfield />);
  const input = screen.getByLabelText("basic-text-input");
  userEvent.type(input, "facebook");
  expect(input.value).toBe("facebook");
});
