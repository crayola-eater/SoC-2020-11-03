// ### Task 3

// The `<ListItem />` component takes in `name` (string), `completed` (boolean) and `tickItem` (function) as props.

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListItem from "./";

describe("ListItem component", () => {
  // - Test that the inner text of the `<li>` element is the value of the `name` prop.
  test("inner text of the li element should be the value of the name prop", () => {
    const testProps = {
      name: "some_name",
      completed: false,
      tickItem: jest.fn(),
    };
    const { getByText } = render(<ListItem {...testProps} />);
    const li = getByText(testProps.name);
    expect(li).toHaveTextContent(testProps.name);
  });

  // - Test that the class of the `<li>` element is 'tickedItem' if the `completed` boolean is false, or 'untickedItem' if it is true.
  for (const [expectedClass, completed] of Object.entries({
    tickedItem: true,
    untickedItem: false,
  })) {
    test("li element should have tickedItem class if completed prop is true, and untickedItem class if completed prop is false", () => {
      const testProps = {
        name: "some_name",
        completed,
        tickItem: jest.fn(),
      };
      const { getByText } = render(<ListItem {...testProps} />);
      const li = getByText(testProps.name);
      expect(li).toHaveClass(expectedClass);
    });
  }

  // - Test whether the `tickItem` function has been called after the `<li>` has been clicked.
  test("should call tickItem function when li element has been clicked", () => {
    const testProps = {
      name: "some_name",
      completed: true,
      tickItem: jest.fn(),
    };
    const { getByText } = render(<ListItem {...testProps} />);
    const li = getByText(testProps.name);
    fireEvent.click(li);
    expect(testProps.tickItem).toHaveBeenCalled();
  });
});
