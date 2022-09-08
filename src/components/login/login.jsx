import { useState } from "react";
import { Container, Button, Form, Row, Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { useAuthContext } from "../../context/auth/auth.context";
import "./login.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //naviate("/products");
    const user = await login({ username, password });

    //console.log("user", user);
    console.log("products before");
    //console.log("navigate");
    navigate("/");
    console.log("products after");
  };

  return (
    <div className="">
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="input"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Iniciar Session
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
