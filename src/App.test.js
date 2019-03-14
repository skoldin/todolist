import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

let Component = renderer.create(<App />);
let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});

it("render matches the snapshot", () => {
  expect(Component.toJSON()).toMatchSnapshot();
});
