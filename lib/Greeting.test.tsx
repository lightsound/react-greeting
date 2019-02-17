import React from "react";
import { render } from "react-testing-library";
import Greeting from "./Greeting";

test("renders correctly", () => {
  const { asFragment } = render(<Greeting text="react" />);
  expect(asFragment()).toMatchSnapshot();
});
