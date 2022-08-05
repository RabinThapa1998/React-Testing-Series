import { render, screen, fireEvent } from "@testing-library/react";
import StudentForm from "../index";

it("should render input field", () => {
  render(<StudentForm />);
  const inputElement = screen.getByTestId("name-field");
  fireEvent.change(inputElement, {
    target: { value: "Go Grocery Shopping" },
  });

  expect(inputElement.value).toBe("Go Grocery Shopping");
  // expect(inputElement).toBeInTheDocument();
});
