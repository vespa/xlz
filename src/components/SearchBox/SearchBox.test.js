import SearchBox from "./SearchBox";
import { render } from "@testing-library/react";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
  useSearchParams: () => [{ get: () => "test" }],
}));

test("render Message with children and duration", () => {
  let view = render(
    <>
      <SearchBox />
    </>
  );
  expect(view).toMatchSnapshot();
});
