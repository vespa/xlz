import SearchFilters from "./SearchFilters";
import { render } from "@testing-library/react";


test("render Message with children and duration", () => {
  let view = render(
    <>
      <SearchFilters />
    </>
  );
  expect(view).toMatchSnapshot();
});
