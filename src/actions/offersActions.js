import * as types from 'constants/offersActionTypes';
import sortByIndex from 'utils/sortByIndex';
import { getSortOption, getOffersList } from 'selectors/offers';
import * as api from './api';

/*
  Get Offers
*/
export const getOffers = () => async (dispatch, getState) => {
  try {
    await dispatch({
      type: types.GET_OFFERS_REQUEST,
    });

    const { data } = await api.getOffersRequest();

    const currentSortOption = getSortOption(getState());

    // lets sort the array by the default sort type
    const sorted = data.offers.sort(sortByIndex(currentSortOption));

    await dispatch({
      type: types.GET_OFFERS_SUCCESS,
      payload: {
        items: sorted,
        count: sorted.length,
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

/*
  Sort Offers
*/
export const sortOffers = newSortValue => async (dispatch, getState) => {
  const currentList = getOffersList(getState());

  // lets sort the array by the default sort type
  const sorted = currentList.sort(sortByIndex(newSortValue));

  await dispatch({
    type: types.SORT_OFFERS,
    payload: {
      newSortOption: newSortValue,
      items: sorted,
    },
  });
};
