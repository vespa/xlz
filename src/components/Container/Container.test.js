import Container from "./Container";
import { render } from "@testing-library/react";

test("render row without args", () => {
  let view = render(<Container>Test </Container>);
  expect(view).toMatchSnapshot();
});
