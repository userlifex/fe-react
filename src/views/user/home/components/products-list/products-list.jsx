import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../../../../context/products/products.context";

export function ProductsList() {
  const { products, isLoadingProducts } = useProductsContext();
  const naviage = useNavigate();
  return (
    <div className="m-4">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.uuid}>
            <Card>
              <Card.Img
                variant="top"
                src={product.imgUrl}
                onError={(e) => {
                  e.target.src =
                    "https://www.aureamartins.com.br/application/modules/themes/views/default/assets/images/image-placeholder.png";
                }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: ${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer
                style={{ cursor: "pointer" }}
                onClick={() => {
                  naviage(`product/${product.uuid}`);
                }}
              >
                <Card.Text>Agregar al carrito</Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
