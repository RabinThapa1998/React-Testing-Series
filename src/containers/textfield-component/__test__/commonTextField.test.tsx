import { render, screen, fireEvent } from "@testing-library/react";
import CommonTextField from "../CommonTextField";
import React from "react";

it("should render label text", () => {
  render(
    <CommonTextField
      label="labelText"
      name="nameText"
      placeholder="placeholder"
    />
  );
  const CommonTextFieldElement = screen.getByText(/labeltext/i);
  expect(CommonTextFieldElement).toBeInTheDocument();
});

it("should render changes in  corresponding inputfield ", () => {
  render(
    <CommonTextField
      label="labelText"
      name="nameText"
      placeholder="placeHolderText"
    />
  );
  const labelElement = screen.getByText(/labeltext/i);
  const InputFieldElement = screen.getByRole("textbox") as HTMLInputElement;

  fireEvent.change(InputFieldElement, {
    target: {
      value: "Go Grocery Shopping",
    },
  });

  expect(InputFieldElement.value).toBe("Go Grocery Shopping");
});
