import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { offersListType } from 'types/offerTypes';
import { getOffers, showAllOffers } from 'actions/offersActions';
import {
  getOffersList,
  getIsLoadingList,
  getIsFullOffers,
} from 'selectors/offers';
import Spinner from 'components/Spinner';
import Offers from 'components/OffersList';

class OffersContainer extends Component {
  static propTypes = {
    items: offersListType,
    isLoading: PropTypes.bool.isRequired,
    getOffers: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
  };

  componentDidMount() {
    this.props.getOffers();
  }

  render() {
    console.log('%c this.props', 'color: #0087d4', this.props);
    const { items, isLoading } = this.props;

    return <div>{isLoading ? <Spinner /> : <Offers items={items} />}</div>;
  }
}

const mapStateToProps = state => ({
  items: getOffersList(state),
  isLoading: getIsLoadingList(state),
  isFullOffers: getIsFullOffers(state),
});

const mapDispatchToProps = dispatch => ({
  getOffers: bindActionCreators(getOffers, dispatch),
  showAllOffers: bindActionCreators(showAllOffers, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OffersContainer);
