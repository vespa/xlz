import Image from "./Image";
import { fireEvent, render, screen } from "@testing-library/react";
import gif from "static/loading.gif";

test("Render Image", async () => {
  const fakeFetch = async () => Promise.resolve({ url: gif });
  let view = await render(
    <>
      <Image fetch={fakeFetch} src={gif} alt={"test"} />
    </>
  );
  let img = await screen.findByAltText("test");
  expect(img).toHaveAttribute("src", gif);
  expect(view).toMatchSnapshot();
});
