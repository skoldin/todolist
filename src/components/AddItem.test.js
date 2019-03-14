import React from "react";
import AddItem from "./AddItem";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const props = {
  handleAdd: jest.fn()
};

let Component = renderer.create(<AddItem {...props} />);
let wrapper;

beforeEach(() => {
  wrapper = shallow(<AddItem {...props} />);
});

it("render matches the snapshot", () => {
  expect(Component.toJSON()).toMatchSnapshot();
});

it("item is empty by default", () => {
  expect(wrapper.find("input").props().value).toBe("");
});

it("add item", () => {
  const input = wrapper.find("input");
  const value = "Test item";
  const event = { currentTarget: { value } };

  input.simulate("change", event);

  wrapper.update();

  // wait until the component is re-rendered
  setTimeout(() => {
    expect(input.props().value).toBe(value);
  }, 0);

  wrapper.find("button").simulate("click");

  expect(props.handleAdd).toHaveBeenCalled();

  wrapper.update();

  expect(input.props().value).toBe("");
});
