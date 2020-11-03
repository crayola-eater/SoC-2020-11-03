/* This component will show the list of items that the person has entered.*/

import React from "react";
import ListItem from "../ListItem";
import PropTypes from "prop-types";

function ShowList({ list, tickItem }) {
  return (
    <ol>
      {list.map((listItem, index) => (
        <ListItem
          name={listItem.name}
          completed={listItem.completed}
          key={index}
          tickItem={() => tickItem(index)}
        />
      ))}
    </ol>
  );
}

ShowList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  tickItem: PropTypes.func.isRequired,
};

export default ShowList;
