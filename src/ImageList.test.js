import React from "react";
import ImageList from "./ImageList.js";
import renderer from "react-test-renderer";

test('renders ImageList.js correctly', () => {
  const tree = renderer
    .create(<ImageList images={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});