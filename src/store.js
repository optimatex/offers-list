import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  combineReducers,
  {},
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
