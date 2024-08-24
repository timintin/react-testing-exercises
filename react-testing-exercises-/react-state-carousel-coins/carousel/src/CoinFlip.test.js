
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinFlip from "./CoinFlip";

beforeEach(function () {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

afterEach(function () {
  Math.random.mockRestore();
});

// Smoke test for CoinFlip component
it("renders without crashing", function () {
  render(<CoinFlip />);
});

// Snapshot test for CoinFlip component
it("matches snapshot", function () {
  const { asFragment } = render(<CoinFlip />);
  expect(asFragment()).toMatchSnapshot();
});

// Test for flipping coin and updating state
it("flips the coin and updates the state", function () {
  const { getByText, getByAltText } = render(<CoinFlip />);
  const button = getByText("Flip the Coin");

  // First flip should be heads
  fireEvent.click(button);
  expect(getByAltText("heads")).toBeInTheDocument();

  // Second flip should be tails
  fireEvent.click(button);
  expect(getByAltText("tails")).toBeInTheDocument();
});
