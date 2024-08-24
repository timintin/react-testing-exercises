import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// Smoke test for Carousel component
it("renders without crashing", function () {
  render(<Carousel />);
});

// Snapshot test for Carousel component
it("matches snapshot", function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// Test for the bug: left arrow should move to the previous image
it("left arrow moves to the previous image", function () {
  const { getByTestId } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // Move to the second image
  fireEvent.click(rightArrow);
  
  // Test if clicking the left arrow moves back to the first image
  fireEvent.click(leftArrow);
  expect(getByTestId("image-id")).toHaveAttribute("src", "image1.jpg");
});

// Test for the bug: hiding arrows at the boundaries
it("hides left arrow on first image and right arrow on last image", function () {
  const { getByTestId } = render(<Carousel />);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // Test left arrow is hidden on the first image
  expect(leftArrow).toHaveClass("hidden");

  // Move to the last image
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // Test right arrow is hidden on the last image
  expect(rightArrow).toHaveClass("hidden");
});
