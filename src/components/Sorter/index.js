import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { offersListType } from 'types/offerTypes';
import { sortOffers } from 'actions/offersActions';
import { getSortOption } from 'selectors/offers';
import './style.module.scss';

class OffersContainer extends Component {
  static propTypes = {
    getSortOption: offersListType,
    sortOffers: PropTypes.func.isRequired,
  };

  handleSort = event => {
    this.props.sortOffers(event.target.value);
  };

  render() {
    const { sortOption } = this.props;

    return (
      <div styleName="container">
        Sort by:
        <select
          styleName="selector"
          value={sortOption}
          onChange={this.handleSort}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortOption: getSortOption(state),
});

const mapDispatchToProps = dispatch => ({
  sortOffers: bindActionCreators(sortOffers, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OffersContainer);
