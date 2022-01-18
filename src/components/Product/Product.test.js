import Product from "./Product";
import { render } from "@testing-library/react";

const props = {
  brand: "brand",
  price: 999,
  name: "test",
  image: "test.jpg",
};

test("render Message with children and duration", () => {
  let view = render(
    <>
      <Product {...props} />
    </>
  );
  expect(view).toMatchSnapshot();
});
