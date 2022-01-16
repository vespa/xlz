import Button from "./Button";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <Button />
    </>
  );
  expect(view).toMatchSnapshot();
});
