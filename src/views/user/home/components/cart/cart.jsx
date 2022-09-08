import { Button, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../../components/loader/loader";
import { useAlertsContext } from "../../../../../context/alerts/alerts.context";
import { useCartContext } from "../../../../../context/cart/cart-context";

export const Cart = () => {
  const {
    cart,
    isLoadingCart,
    removeItemFromCart,
    total,
    clearCart,
    isClearingCart,
    makeOrder,
  } = useCartContext();
  const navigate = useNavigate();
  const { updateAlert } = useAlertsContext();

  const onMakeOrder = async () => {
    await makeOrder();
    updateAlert({
      message: "Orden creada con exito",
      variant: "success",
    });
    navigate("/");
  };

  if (isLoadingCart) {
    return <Loader />;
  }

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.uuid}>
              <td>{index + 1}</td>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price}</td>
              <td>$ {item.product.price * item.quantity}</td>
              <td>
                <Button
                  onClick={() => removeItemFromCart(item.uuid)}
                  variant="outline-danger"
                  size="sm"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>$ {total}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <div>
        <Button variant="outline-success" onClick={() => onMakeOrder()}>
          Comprar
        </Button>

        <Button
          variant="outline-danger"
          disabled={isClearingCart}
          onClick={() => clearCart()}
        >
          Limpiar Carrito {isClearingCart && <Spinner animation="border" />}
        </Button>
      </div>
    </div>
  );
};
