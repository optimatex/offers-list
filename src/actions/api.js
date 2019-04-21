import axios from 'axios';

// 📌 TODO: fix eslint error
/* eslint-disable import/prefer-default-export */
export const getOffersRequest = () =>
  axios.get('https://content.sixt.io/codingtasks/offers.json?sortIndexes=name');
