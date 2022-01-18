import SimpleSelector from "./SimpleSelector";
import { render } from "@testing-library/react";

const options = [
  {
    label: "None",
    value: "",
  },
  {
    label: "Price: Low to high",
    value: "price_desc",
  },
  {
    label: "Price: High to low",
    value: "price_asc",
  },
];

test("render element SimpleSelector without crashing", () => {
  let view = render(
    <>
      <SimpleSelector options={options} onChange={() => console.log("test")} />
    </>
  );
  expect(view).toMatchSnapshot();
});
