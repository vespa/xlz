import Col from "./Col";
import { render } from "@testing-library/react";

test("render col without args", () => {
  let view = render(<Col>Test </Col>);
  expect(view).toMatchSnapshot();
});

test("render col with size", () => {
  let view = render(<Col size={2}>Test </Col>);
  expect(view).toMatchSnapshot();
});

test("render col with smallSize", () => {
  let view = render(<Col smallSize={2}>Test </Col>);
  expect(view).toMatchSnapshot();
});

test("render col with hideDesktop", () => {
  let view = render(<Col hideDesktop>Test </Col>);
  expect(view).toMatchSnapshot();
});

test("render col with hideMobile", () => {
  let view = render(<Col hideDesktop>Test </Col>);
  expect(view).toMatchSnapshot();
});

test("render col with className", () => {
  let view = render(<Col className={"test"}>Test </Col>);
  expect(view).toMatchSnapshot();
});
