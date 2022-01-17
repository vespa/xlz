import Product from "./Product";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <Product />
    </>
  );
  expect(view).toMatchSnapshot();
});
