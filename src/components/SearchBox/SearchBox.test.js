import SearchBox from "./SearchBox";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <SearchBox />
    </>
  );
  expect(view).toMatchSnapshot();
});
