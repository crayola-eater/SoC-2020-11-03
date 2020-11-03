import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputList from "./";

describe("InputList component", () => {
  // - Test whether the `addToList` function has been called after the button has been clicked.
  test("should call addToList function when button is clicked", () => {
    const testProps = {
      addToList: jest.fn(),
      buttonText: "some_button_text",
    };
    const { getByText } = render(<InputList {...testProps} />);
    const button = getByText(testProps.buttonText);
    fireEvent.click(button);
    expect(testProps.addToList).toHaveBeenCalled();
  });

  // - Test that the inner text of the `<button>` element is the value of the `buttonText` prop.
  test("button should have inner text of buttonText prop", () => {
    const testProps = {
      addToList: jest.fn(),
      buttonText: "some_button_text",
    };
    const { getByText } = render(<InputList {...testProps} />);
    const button = getByText(testProps.buttonText);
    expect(button).toHaveTextContent(testProps.buttonText);
  });
});
