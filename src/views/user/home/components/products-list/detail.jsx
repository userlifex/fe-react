import { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../../components/loader/loader";

export const Detail = ({ product }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const naviage = useNavigate();

  return (
    <Card>
      <div>
        {isLoadingImage && (
          <div
            style={{
              height: "6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader noFullScreen={true} />
          </div>
        )}
        <Card.Img
          variant="top"
          src={product.imgUrl}
          onError={(e) => {
            e.target.src =
              "https://www.aureamartins.com.br/application/modules/themes/views/default/assets/images/image-placeholder.png";
          }}
          onLoad={() => setIsLoadingImage(false)}
        />
      </div>
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
  );
};
