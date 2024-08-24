
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke test for Card component
it("renders without crashing", function () {
  render(<Card />);
});

// Snapshot test for Card component
it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
