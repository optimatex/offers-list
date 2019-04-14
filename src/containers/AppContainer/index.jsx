import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OffersContainer from 'containers/OffersContainer';
import { setAppWidth } from 'actions/viewActions';
import './style.module.scss';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      this.handleSetWidth();
      // subscribe for changes of the window width
      window.addEventListener('resize', this.handleSetWidth);
    }
  }

  handleSetWidth = () => {
    this.props.setAppWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
    );
  };

  render() {
    return (
      <div styleName="app-container">
        <OffersContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setAppWidth: bindActionCreators(setAppWidth, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);
