import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import FetchComponent from "../FetchComponent";
import { rest } from "msw";
import { setupServer } from "msw/node";

const data = [
  { title: "fetch rain", id: 1, userId: 1, completed: false },
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
const pokeData = [
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
    return res(ctx.json({ results: pokeData }));
  })
);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("FetchComponent", () => {
  it("should render the fetch api data on first mount", async () => {
    render(<FetchComponent />);
    const paraEle = await screen.findByText("fetch rain");
    expect(paraEle).toBeInTheDocument();
  });

  it("should render the fetch api data on button click", async () => {
    render(<FetchComponent />);
    const buttonEle = await screen.findByRole("button");
    expect(buttonEle).toBeInTheDocument();
    fireEvent.click(buttonEle);
    // await waitFor(() => {
    //   const paraEle = screen.getByText("ivysaur");
    //   return expect(paraEle).toBeInTheDocument();
    // });

    const paraEle = await screen.findByText("venusaur");
    return expect(paraEle).toBeInTheDocument();
  });
});
