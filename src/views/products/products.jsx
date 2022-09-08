import { AllProducts } from "./components/all/all-products";
import { CreateProduct } from "./components/create/create-product";
import { ItemProduct } from "./components/item/item-product";
import { ItemsContainer } from "./components/items-containers/items-container-product";
import "./products.css";

export const Products = () => {
  return (
    <div className="products-container">
      <div>
        <h2>Products</h2>
      </div>
      <CreateProduct />
      <ItemsContainer />
    </div>
  );
};
