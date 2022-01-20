import Arrow from "./Arrow";
import { render, fireEvent, screen } from "@testing-library/react";

test("render Arrow without crashing", () => {
  let view = render(
    <>
      <Arrow />
    </>
  );
  render(
    <>
      <Arrow type={"down"} />
    </>
  );
  expect(view).toMatchSnapshot();
});

test("render Arrow with param without crashing", () => {
  const mock = jest.fn();
  let view = render(
    <>
      <Arrow type={"up"} onClick={mock} />
    </>
  );
  const arrow = screen.getByTestId("arrow");
  fireEvent.click(arrow);
  expect(mock).toBeCalledTimes(1);
  expect(view).toMatchSnapshot();
});
