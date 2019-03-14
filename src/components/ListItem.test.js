import React from "react";
import ListItem from "./ListItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const item = { id: "", name: "Test item", done: true };
const props = {
  item,
  updateItem: jest.fn(),
  deleteItem: jest.fn()
};

let Component = renderer.create(<ListItem {...props} />);
let wrapper;

beforeEach(() => {
  wrapper = shallow(<ListItem {...props} />);
});

it("render matches the snapshot", () => {
  expect(Component.toJSON()).toMatchSnapshot();
});

it("handle change", () => {
  const event = { currentTarget: { checked: false } };

  const input = wrapper.find("input");

  input.simulate("change", event);

  expect(props.updateItem).toHaveBeenCalledWith(props.item);
});

it("handle delete", () => {
  const button = wrapper.find("button");

  button.simulate("click");

  expect(props.deleteItem).toHaveBeenCalledWith(props.item.id);
});
