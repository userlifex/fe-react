import { Alert, Container } from "react-bootstrap";
import { useAlertsContext } from "../../context/alerts/alerts.context";
import "./custom-alert.css";

//variants
//'primary',
//'secondary',
//'success',
//'danger',
//'warning',
//'info',
//'light',
//'dark',

export const CustomAlert = () => {
  const { isAlertActive, message, variant, updateAlert } = useAlertsContext();
  console.log("custom alert");

  if (!isAlertActive) return null;

  <Alert variant="primary">Este es un mensaje por defecto</Alert>;
  return (
    <div className="alert-container">
      <Alert variant={variant ?? "primary"}>{message}</Alert>
    </div>
  );
};
