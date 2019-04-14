import { combineReducers } from 'redux';

import view from './view/reducer';
import offers from './offers/reducer';

export default combineReducers({ view, offers });
