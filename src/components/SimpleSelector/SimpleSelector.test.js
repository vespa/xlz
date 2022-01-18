import SimpleSelector from "./SimpleSelector";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <SimpleSelector />
    </>
  );
  expect(view).toMatchSnapshot();
});
