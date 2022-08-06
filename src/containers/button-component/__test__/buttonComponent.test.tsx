import { render, screen, fireEvent } from "@testing-library/react";
import CommonButton from "../index";

it("should render exact button text", () => {
  render(<CommonButton>this is a button</CommonButton>);
  const ButtonElement = screen.getByText("this is a button");
  expect(ButtonElement).toBeInTheDocument();
});

it("should render exact button React node component", () => {
  render(
    <CommonButton>
      <p>this is a button</p>
    </CommonButton>
  );
  const ButtonElement = screen.getByText("this is a button");
  expect(ButtonElement).toBeInTheDocument();
});
