import Button from "./Button";
import { render } from "@testing-library/react";

test("render Button without crashing", () => {
  let view = render(
    <>
      <Button>test</Button>
    </>
  );
  expect(view).toMatchSnapshot();
});
