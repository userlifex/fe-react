import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomAlert } from "../components/custom-alert/custom-alert";
import { Dashboard } from "../views/dashboard/dashboard";
import { Products } from "../views/products/products";
import { Startup } from "../views/startup/startup";
import { Cart } from "../views/user/home/components/cart/cart";
import { History } from "../views/user/home/components/history/history";
import { ProductDetail } from "../views/user/home/components/product-detail/product-detail";
import { ProductsList } from "../views/user/home/components/products-list/products-list";
import { Home } from "../views/user/home/home";
import { ProtectedRoute } from "./protected-router";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="" element={<Home />}>
            <Route path="" element={<ProductsList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="history" element={<History />} />
            <Route path="product/:uuid" element={<ProductDetail />} />
            <Route path="*" element={<ProductsList />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute admin={true} />}>
          <Route path="admin" element={<Home />}>
            <Route path="products" element={<Products />} />
            <Route path="*" element={<ProductsList />} />
          </Route>
        </Route>
        <Route path="login" element={<Startup />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
