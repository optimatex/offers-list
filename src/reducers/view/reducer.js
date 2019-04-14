import * as types from 'constants/viewActionTypes';
import initialState from './initialState';

export default function viewReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_WIDTH:
      return {
        ...state,
        width: action.payload,
      };

    default:
      return state;
  }
}
