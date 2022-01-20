import Row from "./Row";
import { render } from "@testing-library/react";

test("render view without args", () => {
  let view = render(<Row>Test </Row>);
  expect(view).toMatchSnapshot();
});

test("render view with list arg", () => {
  let view = render(<Row list>Test </Row>);
  expect(view).toMatchSnapshot();
});

test("render view with className", () => {
  let view = render(<Row className={"test"}>Test </Row>);
  expect(view).toMatchSnapshot();
});

test("render view with subItem arg", () => {
  let view = render(<Row subItem>Test </Row>);
  expect(view).toMatchSnapshot();
});

test("render view with subItem and title args", () => {
  let view = render(
    <Row subItem title>
      Test{" "}
    </Row>
  );
  expect(view).toMatchSnapshot();
});
