import axios from "axios";

import { constants } from "./constants";

const createProduct = async (productData) => {
  try {
    const { price, stock, imageName, ...rest } = productData;

    const { data } = await axios.post(`${constants.apiUrl}/products`, {
      ...rest,
      stock: +stock,
      price: +price,
      imgUrl: `${constants.apiUrl}/${imageName}`,
    });

    return data.data;
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

const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image, image.name);

    await axios.post("http://localhost:3000/products/image", formData);
  } catch (err) {
    throw err;
  }
};

export const productsService = {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProduct,
  uploadImage,
};
