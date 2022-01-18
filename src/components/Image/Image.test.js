import Image from "./Image";
import { render } from "@testing-library/react";

test("render Message with children and duration", () => {
  let view = render(
    <>
      <Image src={"test.jpg"} alt={"test"} />
    </>
  );
  expect(view).toMatchSnapshot();
});
