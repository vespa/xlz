import Layout from "./Layout";
import { render } from "@testing-library/react";

const mockedSetUserParams = {
  append: jest.fn(),
  get: jest.fn(),
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [mockedSetUserParams, () => {}],
}));

test("render Element without crashing", () => {
  let view = render(
    <>
      <Layout />
    </>
  );
  expect(view).toMatchSnapshot();
});
