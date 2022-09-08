import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsService } from "../services/products";

export const useProduct = () => {
  const { uuid } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);

  useEffect(() => {
    fetchProduct(uuid);
  }, []);

  const fetchProduct = async (uuid) => {
    setIsLoadingProduct(true);

    const result = await productsService.getProduct(uuid);
    setProduct(result);
    setIsLoadingProduct(false);
  };

  return { product, isLoadingProduct, fetchProduct };
};
