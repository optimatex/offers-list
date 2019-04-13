import PropTypes from "prop-types";

export const offerItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}).isRequired;

export const offersListType = PropTypes.arrayOf(offerItemType);
