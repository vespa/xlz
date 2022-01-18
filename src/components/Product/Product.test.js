import Product from "./Product";
import { render, screen } from "@testing-library/react";

test("render Product whitout priceSale and eyecatcher", async () => {
  const props = {
    brand: "brand",
    price: 999,
    name: "test",
    image: "test.jpg",
  };
  let view = render(
    <>
      <Product {...props} />
    </>
  );
  const title = screen.getByText(props.name);
  expect(title.tagName).toBe("H2");

  const brand = screen.getByText(props.brand);
  expect(brand.tagName).toBe("H3");

  const price = screen.getByText(props.price);
  expect(price.tagName).toBe("SPAN");

  await screen.findByTestId("product-image");

  expect(screen.queryByTestId("price-sales")).not.toBeInTheDocument();
  expect(screen.queryByTestId("eyecatcher")).not.toBeInTheDocument();

  expect(view).toMatchSnapshot();
});

test("render Product whitout with priceSale and eyecatcher", async () => {
  const props = {
    eyecatcher: "SUPER SALE",
    brand: "brand",
    price: 999,
    name: "test",
    image: "test.jpg",
    priceSale: 888,
  };
  let view = render(
    <>
      <Product {...props} />
    </>
  );
  const title = screen.getByText(props.name);
  expect(title.tagName).toBe("H2");

  const brand = screen.getByText(props.brand);
  expect(brand.tagName).toBe("H3");

  const price = screen.getByText(props.price);
  expect(price.tagName).toBe("SPAN");

  await screen.findByTestId("product-image");

  expect(screen.getByTestId("price-sale")).toBeInTheDocument();
  expect(screen.getByTestId("eyecatcher")).toBeInTheDocument();

  expect(view).toMatchSnapshot();
});
