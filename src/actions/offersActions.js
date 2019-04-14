import * as api from './api';
import * as types from 'constants/offersActionTypes';

/*
  Get Offers
*/
export const getOffers = () => async dispatch => {
  try {
    await dispatch({
      type: types.GET_OFFERS_REQUEST,
    });

    const { data } = await api.getOffersRequest();
    console.log('%c data', 'color: #0087d4', data);
    await dispatch({
      type: types.GET_OFFERS_SUCCESS,
      payload: {
        items: data.offers,
        count: data.offers.length,
      },
    });
  } catch (error) {
    await dispatch({
      type: types.GET_OFFERS_ERROR,
      payload: {
        error: error.message,
      },
    });
  }
};
