import { Button, Container } from "react-bootstrap";
import { Counter } from "./components/counter/counter";
import { CustomAlert } from "./components/custom-alert/custom-alert";
import { AlertsContextProvider } from "./context/alerts/alerts.context";
import {
  AuthContextProvider,
  useAuthContext,
} from "./context/auth/auth.context";
import { CartContextProvider } from "./context/cart/cart-context";
import { ProductsContextProvider } from "./context/products/products.context";
import { RouterApp } from "./routes/router-app";
import { Toggle } from "./toggle";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <AlertsContextProvider>
        <ProductsContextProvider>
          <AuthContextProvider>
            <CartContextProvider>
              <RouterApp />
              <Container>
                <CustomAlert />
              </Container>
            </CartContextProvider>
          </AuthContextProvider>
        </ProductsContextProvider>
      </AlertsContextProvider>
    </div>
  );
}

export default App;
