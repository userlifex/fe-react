import { useEffect, useState } from "react";
import {
  Container,
  Button,
  Form,
  Row,
  Image,
  Alert,
  Spinner,
} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import { useAlertsContext } from "../../context/alerts/alerts.context";
import { createUser } from "../../services/create-user";
import "./singup.css";

export function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPasswordEqual, setIsPasswordEqual] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const { updateAlert } = useAlertsContext();

  const cleanStates = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      setIsPasswordEqual(false);
      return;
    }

    setIsPasswordEqual(true);
    setIsLoading(true);

    await createUser({
      username,
      email,
      password,
      firstName,
      lastName,
      role: "USER",
    });

    cleanStates();
    setIsLoading(false);
    updateAlert({
      variant: "primary",
      message: "El usuario se registro correctamente. Ya puede iniciar sesion.",
    });
    //setIsUserCreated(true);
    //setTimeout(() => {
    //setIsUserCreated(false);
    //}, 5000);
  };

  return (
    <div className="">
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                value={firstName}
                required
                type="input"
                placeholder="Nombre"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <div>
              {!isPasswordEqual && (
                <Alert variant={"danger"}>Las contraseñas no coinciden</Alert>
              )}
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? <Spinner animation="border" /> : "Registrarse"}
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
