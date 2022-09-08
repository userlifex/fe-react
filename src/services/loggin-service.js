import axios from "axios";
import { constants } from "./constants";

const isTokenValid = async (token) => {
  try {
    const isTokenValid = await axios.get(`${constants.apiUrl}/auth`, {
      headers: constants.getHeaders(token),
    });

    return isTokenValid.data.data;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const logUser = async (user) => {
  console.log({ user });
  try {
    console.log('pre')
    const result = await axios.post(`${constants.apiUrl}/auth/login`, user);
    console.log('login successful')

    return result.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const logginService = { isTokenValid, logUser };
