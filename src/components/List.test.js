import React from "react";
import List from "./List";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const props = {
  listItems: [
    { id: "1", name: "test 1", done: false },
    { id: "2", name: "test 2", done: true }
  ]
};

let Component = renderer.create(<List {...props} />);
let wrapper;

beforeEach(() => {
  wrapper = shallow(<List {...props} />);
});

it("render matches the snapshot", () => {
  expect(Component.toJSON()).toMatchSnapshot();
});

it("displays 2 items", () => {
  expect(wrapper.find("ListItem")).toHaveLength(2);
});
