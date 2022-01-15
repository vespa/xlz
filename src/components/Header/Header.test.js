import Header from "./Header";
import { render } from "@testing-library/react";

test("render row without args", () => {
  let view = render(<Header>Test </Header>);
  expect(view).toMatchSnapshot();
});
