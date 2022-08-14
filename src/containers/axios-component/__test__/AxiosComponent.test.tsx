import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import AxiosComponent from "../AxiosComponent";
import axiosMock from "axios";
import { rest } from "msw";
import { setupServer } from "msw/node";

const data = [
  { title: "rain", id: 1, userId: 1, completed: false },
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
];
const secondData = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
];

const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(ctx.json(data));
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    return res(ctx.json({ results: secondData }));
  })
);
// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("AxiosComponent", () => {
  it("should render axios data on the screen", async () => {
    render(<AxiosComponent />);
    const textElement = await screen.findByText("rain");
    expect(textElement).toBeInTheDocument();
  });

  it("should render axios data on  button click on the screen", async () => {
    render(<AxiosComponent />);
    const btnElement = await screen.findByText(/Click to fetch data/i);
    expect(btnElement).toBeInTheDocument();
    await fireEvent.click(btnElement);

    await waitFor(() => {
      return expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    });
  });
});
