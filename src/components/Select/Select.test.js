import Select from "./Select";
import { render, screen, fireEvent } from "@testing-library/react";

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

test("render element Select without crashing", (done) => {
  const mockFunc = jest.fn(() => done());
  let view = render(
    <>
      <Select options={options} onChange={mockFunc} />
    </>
  );
  const select = screen.queryByPlaceholderText("Select...");

  expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[1].label)).not.toBeInTheDocument();
  expect(screen.queryByText(options[2].label)).not.toBeInTheDocument();

  fireEvent.click(select);
  expect(screen.getByText(options[0].label)).toBeInTheDocument();
  expect(screen.getByText(options[1].label)).toBeInTheDocument();
  expect(screen.getByText(options[2].label)).toBeInTheDocument();

  fireEvent.click(screen.getByText(options[1].label));
  expect(mockFunc).toBeCalledTimes(1);
  expect(screen.queryByText(options[0].label)).not.toBeInTheDocument();
  expect(screen.getByText(options[1].label)).toBeInTheDocument();
  expect(screen.queryByText(options[2].label)).not.toBeInTheDocument();

  expect(view).toMatchSnapshot();
});
