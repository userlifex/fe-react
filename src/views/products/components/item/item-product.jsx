import { Button, ButtonGroup, Image } from "react-bootstrap";
import {
  commonConstants,
  onErrorLoadingImg,
} from "../../../../common/constants";
import { useProductsContext } from "../../../../context/products/products.context";
import "./index.css";

export const ItemProduct = ({ product }) => {
  const { deleteProdut } = useProductsContext();
  const { name, description, price, stock, imgUrl, uuid } = product;

  return (
    <div className="item-product">
      <div className="image-container__item">
        <img onError={onErrorLoadingImg} src={imgUrl} alt="this is an image" />
      </div>
      <div>
        <p>
          <span>Nombre:</span> {name}
        </p>
        <p>
          <span>Precio:</span> {price}
        </p>
        <p>
          <span>Stock:</span> {stock}
        </p>
        <p>
          <span>Descripcion:</span> {description}
        </p>
        <div className="edit-buttons-group">
          <Button variant="success" size="sm">
            Editar
          </Button>
          <Button variant="danger" size="sm" onClick={() => deleteProdut(uuid)}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};
