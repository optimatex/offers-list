import * as types from 'constants/viewActionTypes';

export const setAppWidth = value => ({
  type: types.SET_WIDTH,
  payload: value,
});
