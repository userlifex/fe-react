import { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { onErrorLoadingImg } from "../../../../../common/constants";
import { Counter } from "../../../../../components/counter/counter";
import { Loader } from "../../../../../components/loader/loader";
import { useAlertsContext } from "../../../../../context/alerts/alerts.context";
import { useCartContext } from "../../../../../context/cart/cart-context";
import { useProductsContext } from "../../../../../context/products/products.context";
import { useProduct } from "../../../../../hooks/useProduct";
import { productsService } from "../../../../../services/products";

export const ProductDetail = () => {
  const { product, isLoadingProduct } = useProduct();
  const { addToCart } = useCartContext();
  const { updateAlert } = useAlertsContext();
  const navigate = useNavigate();

  if (isLoadingProduct) {
    return <Loader />;
  }

  if (!product) {
    return <div>404 Not Found</div>;
  }

  const { name, description, price, stock, imgUrl, uuid } = product;

  const handleOnAdd = async (quantity) => {
    console.log("handleOnAdd", quantity);
    await addToCart(product.uuid, quantity);
    updateAlert({
      message: "Producto agregado al carrito",
      variant: "success",
    });
    navigate("/");
  };

  return (
    <Card>
      <Card.Header as="h3">{name}</Card.Header>
      <Row md={2}>
        <Card.Img
          style={{ maxWidth: "400px" }}
          variant="top"
          src={imgUrl}
          onError={onErrorLoadingImg}
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Card.Title>Descripcion</Card.Title>
            <Card.Text>{description}</Card.Text>
            <br />
            <Card.Title>Pirce: {price}</Card.Title>
            <Card.Title>Stock: {stock}</Card.Title>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              //justifyContent: "center",
            }}
          >
            <Counter limit={stock} handleOnAdd={handleOnAdd} />
          </div>
        </Card.Body>
      </Row>
      <Card.Footer></Card.Footer>
    </Card>
  );
};
