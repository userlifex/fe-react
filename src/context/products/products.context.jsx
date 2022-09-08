import { createContext, useContext, useState, useEffect } from "react";
import { productsService } from "../../services/products";

const ProductsContext = createContext({
  products: [],
});

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const createProduct = async (product, image) => {
    await productsService.uploadImage(image);

    const addedProduct = await productsService.createProduct({
      ...product,
      imageName: image.name,
    });

    addProduct(addedProduct);
  };

  const fetchProducts = () => {
    setIsLoadingProducts(true);
    productsService
      .getAllProducts()
      .then((data) => {
        setProducts(data);
        setIsLoadingProducts(false);
      })
      .catch((err) => console.error(err));
  };

  const deleteProdut = async (uuid) => {
    await productsService.deleteProduct(uuid);
    setProducts((value) => {
      return value.filter((item) => item.uuid !== uuid);
    });
  };

  const addProduct = (product) => {
    setProducts((value) => [product, ...value]);
  };

  const updateStock = (newStock, productUuid) => {
    const index = products.findIndex((item) => item.uuid === productUuid);

    if (index === -1) return;

    const newProducts = [...products];
    newProducts[index].stock = newStock;

    setProducts(newProducts);
  };

  const value = {
    products,
    addProduct,
    isLoadingProducts,
    fetchProducts,
    deleteProdut,
    updateStock,
    createProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { ProductsContextProvider, useProductsContext };
