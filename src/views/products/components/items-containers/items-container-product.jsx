import { Loader } from "../../../../components/loader/loader";
import { useProductsContext } from "../../../../context/products/products.context";
import { ItemProduct } from "../item/item-product";
import "./index.css";

export const ItemsContainer = () => {
  const { products, isLoadingProducts } = useProductsContext();
  console.log({ products });

  if (isLoadingProducts) {
    return <Loader />;
  }
  return (
    <div>
      <div className="items-container">
        {products.map((product) => (
          <ItemProduct key={product.uuid} product={product} />
        ))}
      </div>
    </div>
  );
};
