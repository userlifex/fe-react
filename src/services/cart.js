import axios from "axios";

import { constants } from "./constants";

const getCart = async (token) => {
  try {
    const cart = await axios.get(`${constants.apiUrl}/cart`, {
      headers: constants.getHeaders(token),
    });

    return cart.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const addToCart = async (token, body) => {
  try {
    const cart = await axios.post(
      `${constants.apiUrl}/cart/add-product`,
      body,
      {
        headers: constants.getHeaders(token),
      }
    );

    console.log({ cartService: cart });
    return cart.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const removeFromCart = async (token, uuid) => {
  try {
    console.log({ cartItem: uuid });
    const cartItem = await axios.delete(
      `${constants.apiUrl}/cart/delete-product/${uuid}`,
      {
        headers: constants.getHeaders(token),
      }
    );

    console.log({ cartItem });

    return cartItem.data.data;
  } catch (err) {
    throw err;
  }
};

const clearCart = async (token) => {
  try {
    const cartItem = await axios.post(
      `${constants.apiUrl}/cart/clear`,
      {},
      {
        headers: constants.getHeaders(token),
      }
    );

    return cartItem.data.data;
  } catch (err) {
    throw err;
  }
};

const makeOrder = async (token) => {
  try {
    const order = await axios.post(
      `${constants.apiUrl}/orders`,
      {},
      {
        headers: constants.getHeaders(token),
      }
    );

    return order.data.data;
  } catch (err) {
    throw err;
  }
};

export const cartService = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  makeOrder,
};
