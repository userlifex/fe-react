import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Loader } from "../../../../../components/loader/loader";
import { useProductsContext } from "../../../../../context/products/products.context";
import { Detail } from "./detail";

export function ProductsList() {
  const { products, isLoadingProducts } = useProductsContext();
  if (isLoadingProducts) {
    return <Loader />;
  }

  return (
    <div className="m-4">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.uuid}>
            <Detail product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
