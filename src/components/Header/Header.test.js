import Header from "./Header";
import { render, screen } from "@testing-library/react";

test("render Header without args", () => {
  let view = render(<Header>Test </Header>);
  expect(view).toMatchSnapshot();
});

test("check if elements are present", () => {
  let view = render(
    <Header
      searchBox={
        <>
          <input data-testid={"box"} />
        </>
      }
    >
      Test
    </Header>
  );
  expect(screen.getByTestId("box")).toBeInTheDocument();
  expect(screen.getByAltText("logo")).toBeInTheDocument();
  expect(view).toMatchSnapshot();
});
