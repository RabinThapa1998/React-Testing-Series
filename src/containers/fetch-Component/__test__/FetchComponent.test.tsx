import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import FetchComponent from "../FetchComponent";
import axiosMock from "axios";

afterEach(cleanup);
it("should render axios data on the screen", async () => {
  (axiosMock.get as jest.Mock).mockResolvedValueOnce({
    data: [
      { title: "delectus aut autem", id: 1, userId: 1, completed: false },
      {
        title: "quis ut nam facilis et officia qui",
        id: 2,
        userId: 2,
        completed: false,
      },
      {
        title: "quis  nam facilis et officia qui",
        id: 2,
        userId: 2,
        completed: false,
      },
    ],
  });
  render(<FetchComponent />);

  const textElement = await screen.findByText("delectus aut autem");
  expect(textElement).toBeInTheDocument();
});
