import view from "./view";
import { render } from "@testing-library/react";

test("render view without args", () => {
  let view = render(<view>Test </view>);
  expect(view).toMatchSnapshot();
});

test("render view with list arg", () => {
  let view = render(<view list>Test </view>);
  expect(view).toMatchSnapshot();
});

test("render view with subItem arg", () => {
  let view = render(<view subItem>Test </view>);
  expect(view).toMatchSnapshot();
});

test("render view with subItem and title args", () => {
  let view = render(
    <view subItem title>
      Test{" "}
    </view>
  );
  expect(view).toMatchSnapshot();
});
