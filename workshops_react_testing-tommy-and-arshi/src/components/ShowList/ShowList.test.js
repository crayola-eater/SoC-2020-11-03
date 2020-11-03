// ### Task 4

// The `<ShowList />` component takes in `list` (array) and `tickItem` (function) as props.

import React from "react";
import { render } from "@testing-library/react";
import ShowList from "./";

describe("ShowList component", () => {
  // - Test that `<ol>` element contains the correct number of <ListItem /> components.
  test("should have the correct number of ListItem components", () => {
    const testProps = {
      list: [
        {
          name: "some_name",
          completed: false,
        },
        {
          name: "some_other_name",
          completed: true,
        },
        {
          name: "yet_another_name",
          completed: true,
        },
      ],
      tickItem: jest.fn(),
    };
    const { getAllByTestId } = render(<ShowList {...testProps} />);
    const lis = getAllByTestId("list-item");
    expect(lis).toHaveLength(testProps.list.length);
  });
});
