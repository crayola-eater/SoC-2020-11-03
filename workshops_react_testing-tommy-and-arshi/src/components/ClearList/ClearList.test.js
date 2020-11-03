import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ClearList from "./";

describe("ClearList component", () => {
  // The `<ClearList />` component takes in a `clearList` function as and `buttonText` string as props.
  test("expect clearList function to have been called after button click.", () => {
    const testProps = {
      buttonText: "some_button_text",
      clearList: jest.fn(),
    };
    const { getByText } = render(<ClearList {...testProps} />);
    const button = getByText(testProps.buttonText);
    fireEvent.click(button);
    expect(testProps.clearList).toHaveBeenCalled();
  });

  // - Test that the inner text of the `<button>` element is the value of the `buttonText` prop.
  test("expect that the button's inner text is the buttonText prop.", () => {
    const testProps = {
      buttonText: "some_button_text",
      clearList: jest.fn(),
    };
    const { getByText } = render(<ClearList {...testProps} />);
    const button = getByText(testProps.buttonText);
    expect(button).toHaveTextContent(testProps.buttonText);
  });
});
