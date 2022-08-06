import { render, screen, fireEvent } from "@testing-library/react";
import CoreInputField from "../core-input-field";
import React from "react";

it("should render core input field change", () => {
  render(<CoreInputField />);
  const CoreInputFieldElement = screen.getByTestId(
    "core-input-field"
  ) as HTMLInputElement;
  fireEvent.change(CoreInputFieldElement, {
    target: { value: "Go Grocery Shopping" },
  });
  expect(CoreInputFieldElement.value).toBe("Go Grocery Shopping");
});
