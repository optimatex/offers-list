import React from "react";
import PropTypes from "prop-types";

import OfferItem from "./components/OfferItem";
import './style.module.scss';

const OffersList = ({ items }) => (
  <div styleName="list">
    {items.map(item => (
      <OfferItem item={item} key={item.id} />
    ))}
  </div>
);

OffersList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}))
};

OffersList.defaultProps = {
  items: []
};

export default OffersList;
