import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import OffersContainer from 'containers/OffersContainer';
import store from './store';

render(
  <Provider store={store}>
    <OffersContainer />
  </Provider>,
  document.getElementById('appRoot'),
);
