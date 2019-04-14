import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAppWidth } from 'selectors/view';
import OfferItem from './components/OfferItem';
import './style.module.scss';

const OffersList = ({ appWidth, items }) => (
  <div styleName="list">
    {items.map(item => (
      <OfferItem item={item} appWidth={appWidth} key={item.id} />
    ))}
  </div>
);

OffersList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

OffersList.defaultProps = {
  items: [],
};

const mapStateToProps = state => ({
  appWidth: getAppWidth(state),
});

export default connect(
  mapStateToProps,
  null,
)(OffersList);
