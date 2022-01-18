import Arrow from "./Arrow";
import { render } from "@testing-library/react";

test("render Arrow without crashing", () => {
  let view = render(
    <>
      <Arrow />
    </>
  );
  expect(view).toMatchSnapshot();
});

test("render Arrow with param without crashing", () => {
  let view = render(
    <>
      <Arrow type={"up"} />
    </>
  );
  expect(view).toMatchSnapshot();
});
