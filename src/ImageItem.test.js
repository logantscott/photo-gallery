import React from "react";
import ImageItem from "./ImageItem.js";
import renderer from "react-test-renderer";

test('renders ImageItem.js correctly', () => {
  const tree = renderer
    .create(<ImageItem image={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});