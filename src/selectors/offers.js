export const getOffersList = ({ offers }) => offers.list.data.items;

export const getoffersListCount = ({ offers }) => offers.list.data.count;

export const getIsLoadingList = ({ offers }) => offers.list.isLoading;

export const getSortOption = ({ offers }) => offers.list.sortOption;
