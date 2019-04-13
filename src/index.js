import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from 'containers/AppContainer';
import store from './store';
import './styles/common.scss';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('appRoot'),
);
