import Arrow from "./Arrow";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <Arrow />
    </>
  );
  expect(view).toMatchSnapshot();
});
