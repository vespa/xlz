import SearchPage from "./SearchPage";
import { render, screen } from "@testing-library/react";

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

jest.mock("infra/api.js", () => ({
  getProductList: () =>
    Promise.resolve([
      {
        brand: "Smith-Bins",
        eyecatcher: "sale",
        id: 1,
        image: "https://loremflickr.com/320/320/furniture,chair/all",
        name: "Transcof",
        price: 655,
        priceSale: 357,
        url: "https://soup.io/augue/quam.json",
        searchableTerms: "Transcof Smith-Bins",
      },
      {
        brand: "Strosin Inc",
        eyecatcher: null,
        id: 2,
        image: "https://loremflickr.com/320/320/furniture,chair/all",
        name: "Konklux",
        price: 669,
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
        priceSale: 428,
        url: "http://amazonaws.com/in/imperdiet/et.jsp",
        searchableTerms: "Vagram Stark Inc",
      },
    ]),
}));

test("render SearchPage without crashing", async () => {
  let view = render(
    <>
      <SearchPage />
    </>
  );
  await screen.findByTestId("product-list");
  const products = screen.queryAllByTestId("product");
  expect(products.length).toBe(3);
  expect(view).toMatchSnapshot();
});

test("should perform a search", async () => {
  let view = render(
    <>
      <SearchPage />
    </>
  );
  await screen.findByTestId("product-list");
  const products = screen.queryAllByTestId("product");
  expect(products.length).toBe(3);
  expect(view).toMatchSnapshot();
});
