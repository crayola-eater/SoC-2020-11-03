//This is the component which shows each individual list item.

import React from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

function ListItem({ name, completed, tickItem }) {
  return (
    <section data-testid="list-item">
      <li
        className={completed ? "tickedItem" : "untickedItem"}
        onClick={tickItem}
      >
        {name}
      </li>
    </section>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  tickItem: PropTypes.func.isRequired,
};

export default ListItem;
