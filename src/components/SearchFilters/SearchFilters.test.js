import SearchFilters from "./SearchFilters";
import { render } from "@testing-library/react";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useSearchParams: () => [{ get: () => `price_desc` }],
}));

test("render element SearchFilters without crashing", () => {
  let view = render(
    <>
      <SearchFilters />
    </>
  );
  expect(view).toMatchSnapshot();
});
