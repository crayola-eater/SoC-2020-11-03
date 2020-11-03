/* This component will contain a button that clears all of the list items which the person has previously entered.*/

import React from "react";
import "./ClearList.css";
import PropTypes from "prop-types";

function ClearList({ clearList, buttonText }) {
  return (
    <section>
      <button className="ClearList" onClick={() => clearList()}>
        {buttonText}
      </button>
    </section>
  );
}

ClearList.propTypes = {
  clearList: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ClearList;
