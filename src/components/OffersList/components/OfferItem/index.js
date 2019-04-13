import React from 'react';

import { offerItemType } from 'types/offerTypes';
import './style.module.scss';

const OfferItem = ({ item: { description, images } }) => (
  <div styleName="item">
    <div styleName="content">
      <div styleName="photo">
        <img src={images.medium} />
      </div>
      {description}
    </div>
  </div>
);

OfferItem.propTypes = {
  item: offerItemType,
};

OfferItem.defaultProps = {
  item: {},
};

export default OfferItem;
