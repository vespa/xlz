import SearchFilters from "./SearchFilters";
import { fireEvent, render, screen } from "@testing-library/react";

const mockedSetUserParams = {
  append: jest.fn(),
  get: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [mockedSetUserParams, () => {}],
}));

test("render element SearchFilters without crashing", () => {
  let view = render(
    <>
      <SearchFilters />
    </>
  );
  expect(view).toMatchSnapshot();
});

test("render element SearchFilters and check elements", () => {
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
  let view = render(
    <>
      <SearchFilters />
    </>
  );
  const select = screen.queryByPlaceholderText("Select...");

  expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[1].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[2].label)).not.toBeInTheDocument();

  fireEvent.click(select);
  expect(screen.getByText(options[0].label)).toBeInTheDocument();
  expect(screen.getByText(options[1].label)).toBeInTheDocument();
  expect(screen.getByText(options[2].label)).toBeInTheDocument();

  fireEvent.click(screen.getByText(options[2].label));
  expect(mockedSetUserParams.append).toBeCalledTimes(1);
  expect(mockedSetUserParams.get).toBeCalledTimes(1);
  expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[1].label)).not.toBeInTheDocument();
  expect(screen.getByText(options[2].label)).toBeInTheDocument();

  expect(view).toMatchSnapshot();
});
