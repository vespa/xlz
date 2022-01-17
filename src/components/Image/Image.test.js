import Image from "./Image";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <Image />
    </>
  );
  expect(view).toMatchSnapshot();
});
