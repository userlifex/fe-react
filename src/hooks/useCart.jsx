import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartService } from "../services/cart";
import { productsService } from "../services/products";

export const useCart = () => {
  const token = window.localStorage.getItem("token");
  const [cartHook, setCart] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setIsLoadingCart(true);

    const result = await cartService.getCart(token);
    setCart(result);
    setIsLoadingCart(false);
  };

  return { cartHook, isLoadingCart, fetchCart };
};
