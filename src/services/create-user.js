import axios from "axios";

import { constants } from "./constants";

export const createUser = async (userData) => {
  try {
    const result = await axios.post(`${constants.apiUrl}/users`, userData);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getUserService = async (token) => {
  try {
    const result = await axios.get(`${constants.apiUrl}/users/me`, {
      headers: constants.getHeaders(token),
    });
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
};
