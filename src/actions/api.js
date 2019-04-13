import axios from "axios";

// 📌 TODO: fix eslint errors after refactoring
/* eslint-disable import/prefer-default-export */
export const getOffersRequest = () =>
  axios.get("https://content.sixt.io/codingtasks/offers.json");
