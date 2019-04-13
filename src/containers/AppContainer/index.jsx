import React, { Component } from 'react';

import OffersContainer from 'containers/OffersContainer';
import './style.module.scss';

class AppContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <div styleName="app-container">
        <OffersContainer />
      </div>
    );
  }
}

export default AppContainer;
