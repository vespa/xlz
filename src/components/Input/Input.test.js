import Input from "./Input";
import { render } from "@testing-library/react";

test("render Message with children and duration", () => {
  let view = render(
    <>
      <Input />
    </>
  );
  expect(view).toMatchSnapshot();
});
