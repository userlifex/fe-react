import { useEffect } from "react";
import { productsService } from "../../../../services/products";

export const AllProducts = () => {
  useEffect(() => {
    productsService.getAllProducts().then((data) => console.log(data));
  }, []);
};
