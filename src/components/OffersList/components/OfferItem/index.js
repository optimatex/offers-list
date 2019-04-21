import React from 'react';
import PropTypes from 'prop-types';

import { offerItemType } from 'types/offerTypes';
import './style.module.scss';

const getProperImage = (appWidth, images) => {
  // if (appWidth > 900) return images.large;
  // if (appWidth > 500) return images.medium;
  // return images.small;
};

const OfferItem = ({ appWidth, item: { description, images, prices } }) => (
  <div styleName="item">
    <div styleName="content">
      <div styleName="photo">
        <img src={getProperImage(appWidth, images)} />
      </div>
      <div styleName="name">{description}</div>
      <div styleName="price">${prices.totalPrice.amount.display}</div>
    </div>
  </div>
);

OfferItem.propTypes = {
  item: offerItemType,
  appWidth: PropTypes.number,
};

OfferItem.defaultProps = {
  item: {},
};

export default OfferItem;
