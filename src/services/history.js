import axios from "axios";

import { constants } from "./constants";

const getHistory = async (token) => {
  try {
    const orders = await axios.get(`${constants.apiUrl}/orders`, {
      headers: constants.getHeaders(token),
    });

    return orders.data.data;
  } catch (err) {
    throw err;
  }
};

export const historyService = {
  getHistory,
};
