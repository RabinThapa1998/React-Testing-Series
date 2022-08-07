import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormComponent from "../index";
import React from "react";

it("should render input field", () => {
  render(<FormComponent />);
  const inputElement = screen.getByTestId("name-field") as HTMLInputElement;
  fireEvent.change(inputElement, {
    target: { value: "Go Grocery Shopping" },
  });
  const submitButtonElement = screen.getByRole("button");
  fireEvent.click(submitButtonElement);

  expect(inputElement?.value).toBe("Go Grocery Shopping");
  // expect(inputElement).toBeInTheDocument();
});

it("should render corresponding typography on submit", async () => {
  render(<FormComponent />);

  const inputElement = screen.getByTestId("name-field") as HTMLInputElement;
  fireEvent.change(inputElement, {
    target: { value: "rabin thapa" },
  });

  const submitButtonElement = screen.getByRole("button");
  fireEvent.click(submitButtonElement);
  // const typographyElement = await waitFor(() => {
  //   return
  // });
  const typographyElement = screen.getByText(/rabin thapa/i);
  expect(typographyElement).toBeInTheDocument();
  // expect(inputElement).toBeInTheDocument();
});
