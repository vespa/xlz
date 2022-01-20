import SearchBox from "./SearchBox";
import { render, screen, fireEvent } from "@testing-library/react";

const mockedSetUserParams = {
  append: jest.fn(),
  get: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [mockedSetUserParams, () => {}],
}));

test("render SearchBox", () => {
  let view = render(
    <>
      <SearchBox />
    </>
  );
  expect(view).toMatchSnapshot();
});

test("render SearchBox and emulate searching by clicking enter", () => {
  render(
    <>
      <SearchBox />
    </>
  );
  const input = screen.queryByPlaceholderText("Enter a search term");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe("Good Day");
  fireEvent.submit(input);
});

test("render SearchBox and emulate searching by clicking on button", () => {
  render(
    <>
      <SearchBox />
    </>
  );
  const input = screen.queryByPlaceholderText("Enter a search term");
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "Good Day" } });
  expect(input.value).toBe("Good Day");
  const button = screen.queryByText("Search");
  fireEvent.click(button);
});
