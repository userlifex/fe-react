import { useContext, useState, useEffect, useCallback } from "react";
import { createContext } from "react";
import { useCart } from "../../hooks/useCart";
import { cartService } from "../../services/cart";
import { useAlertsContext } from "../alerts/alerts.context";

const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const token = window.localStorage.getItem("token");
  const [cart, setCart] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [isClearingCart, setIsClearingCart] = useState(false);
  const { updateAlert } = useAlertsContext();

  useEffect(() => {
    if (token !== "") fetchCart();
  }, []);

  useEffect(() => {
    console.log({ cartInUseEffect: cart });
    if (!cart) return;
    const subTotal = cart.reduce((prev, cur) => {
      const q = cur?.quantity ?? 0;
      const price = cur?.product?.price ?? 0;

      return prev + q * price;
    }, 0);

    setTotal(subTotal);
    console.log("El carrito ha sido actualizado");
    console.table(cart);
  }, [cart]);

  const getQuantity = useCallback(() => {
    let count = 0;
    cart.forEach((prod) => (count += prod.quantity));
    return count;
  }, [cart]);

  const fetchCart = async () => {
    setIsLoadingCart(true);

    const result = await cartService.getCart(token);
    setCart(result);
    setIsLoadingCart(false);
  };

  const addToCart = async (productUuid, quantity) => {
    //setIsLoadingCart(true);
    await cartService.addToCart(token, { productUuid, quantity });
    await fetchCart();
    //setIsLoadingCart(false);
  };

  const removeItemFromCart = async (uuid) => {
    try {
      const itemFromCart = await cartService.removeFromCart(token, uuid);
      const newCart = cart.filter((item) => item.uuid !== uuid);
      setCart(newCart);
    } catch (err) {
      console.error(err);
    }
  };

  const clearCart = async () => {
    setIsClearingCart(true);
    try {
      const cartCleared = await cartService.clearCart(token);
      setCart([]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsClearingCart(false);
    }
  };

  const makeOrder = async () => {
    try {
      if (cart.length === 0) {
        updateAlert({
          message: "No hay productos en el carrito",
          variant: "danger",
        });
        return;
      }
      await cartService.makeOrder(token);
      setCart([]);
    } catch (err) {
      console.error(err);
    }
  };

  /*
  const removeFromCart = (uuid) => {
    const newCart = cart.filter((item) => item.uuid !== uuid);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const productIsInCart = (uuid) => {
    return cart.some((item) => item.uuid === uuid);
  };
  */

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoadingCart,
        addToCart,
        removeItemFromCart,
        total,
        clearCart,
        isClearingCart,
        makeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
