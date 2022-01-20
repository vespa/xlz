/* eslint-disable testing-library/no-node-access */
import { Layout } from "containers/Layout";
import SearchPage from "./SearchPage";
import { render, screen, fireEvent } from "@testing-library/react";
import * as api from "infra/api";

jest.mock("infra/api.js", () => ({
  getProductList: jest.fn(),
}));

const mockedSetUserParams = {
  append: jest.fn(),
  get: jest.fn(),
  SEARCHABLE_TERMS_PARAM: "searchableTerms_like",
  SORT_BY_PRICE_PARAM: "sortyByPrice",
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [mockedSetUserParams, () => {}],
}));

const mockResults = [
  {
    brand: "Smith-Bins",
    eyecatcher: "sale",
    id: 1,
    image: "https://loremflickr.com/320/320/furniture,chair/all",
    name: "Transcof",
    price: 655,
    priceSale: 100,
    url: "https://soup.io/augue/quam.json",
    searchableTerms: "Transcof Smith-Bins",
  },
  {
    brand: "Strosin Inc",
    eyecatcher: null,
    id: 2,
    image: "https://loremflickr.com/320/320/furniture,chair/all",
    name: "Konklux",
    price: 200,
    priceSale: null,
    url: "https://eepurl.com/quam/pharetra.jsp",
    searchableTerms: "Konklux Strosin Inc",
  },
  {
    brand: "Stark Inc",
    eyecatcher: "sale",
    id: 3,
    image: "https://loremflickr.com/320/320/furniture,chair/all",
    name: "Vagram",
    price: 566,
    priceSale: 300,
    url: "http://amazonaws.com/in/imperdiet/et.jsp",
    searchableTerms: "Vagram Stark Inc",
  },
];

const options = [
  {
    label: "None",
    value: "",
  },
  {
    label: "Price: Low to high",
    value: "price_desc",
  },
  {
    label: "Price: High to low",
    value: "price_asc",
  },
];

test("render SearchPage without crashing", async () => {
  api.getProductList.mockImplementation(() => Promise.resolve(mockResults));
  let view = render(
    <>
      <Layout Outlet={SearchPage} />
    </>
  );
  await screen.findByTestId("product-list");
  const products = screen.queryAllByTestId("product");
  expect(products.length).toBe(3);
  expect(view).toMatchSnapshot();
});

test("should perform a search", async () => {
  api.getProductList.mockImplementation(() => Promise.resolve(mockResults));
  let view = render(
    <>
      <Layout Outlet={SearchPage} />
    </>
  );
  await screen.findByTestId("product-list");
  const products = screen.queryAllByTestId("product");
  expect(products.length).toBe(3);
  const select = screen.queryByPlaceholderText("price");

  expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[1].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[2].label)).not.toBeInTheDocument();

  fireEvent.click(select);
  expect(screen.getByText(options[0].label)).toBeInTheDocument();
  expect(screen.getByText(options[1].label)).toBeInTheDocument();
  expect(screen.getByText(options[2].label)).toBeInTheDocument();

  fireEvent.click(screen.getByText(options[1].label));
  expect(mockedSetUserParams.append).toBeCalledTimes(1);
  expect(mockedSetUserParams.get).toBeCalledTimes(29);

  const input = screen.queryByPlaceholderText("Enter a search term");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe("Good Day");
  fireEvent.submit(input);

  expect(view).toMatchSnapshot();
});

test("call should faiil", async () => {
  api.getProductList.mockImplementation(
    async () => await Promise.reject("ERROR")
  );
  global.console.error = jest.fn();

  render(
    <>
      <Layout Outlet={SearchPage} />
    </>
  );
  await screen.findByTestId("product-list");
  expect(global.console.error).toBeCalledTimes(1);
  global.console.error.mockRestore();
});
