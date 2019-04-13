import React from "react";
import PropTypes from "prop-types";

const Spinner = props => (
  <div className={`app-spinner ${props.className}`}>
    <div className="app-spinner__circle" />
  </div>
);
Spinner.propTypes = {
  className: PropTypes.string
};

Spinner.defaultProps = {
  className: ""
};

export default Spinner;
