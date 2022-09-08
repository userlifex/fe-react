import axios from "axios";

import { constants } from "./constants";

const createProduct = async (productData) => {
  try {
    console.log("creating...");
    console.log(productData);
    const { price, stock } = productData;
    const { data } = await axios.post(`${constants.apiUrl}/products`, {
      ...productData,
      stock: +stock,
      price: +price,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};

const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${constants.apiUrl}/products`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

const deleteProduct = async (uuid) => {
  try {
    const { data } = await axios.delete(`${constants.apiUrl}/products/${uuid}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

const getProduct = async (uuid) => {
  try {
    const { data } = await axios.get(`${constants.apiUrl}/products/${uuid}`);
    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const productsService = {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProduct,
};
