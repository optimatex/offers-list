import * as types from 'constants/offersActionTypes';
import initialState from './initialState';

export default function offersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_OFFERS_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case types.GET_OFFERS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          data: {
            ...state.list.data,
            items: action.payload.items,
            count: action.payload.count,
          },
        },
      };
    case types.SORT_OFFERS: {
      return {
        ...state,
        list: {
          ...state.list,
          data: {
            ...state.list.data,
            items: [...action.payload.items], // create the new array in order to re-render list
          },
          sortOption: action.payload.newSortOption,
        },
      };
    }

    default:
      return state;
  }
}
