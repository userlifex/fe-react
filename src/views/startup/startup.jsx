import { useEffect, useState } from "react";
import { Container, Button, Form, Row, Image, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { Loader } from "../../components/loader/loader";
import { Login } from "../../components/login/login";
import { Signup } from "../../components/signup/signup";
import { useAuthContext } from "../../context/auth/auth.context";
import "./startup.css";

export function Startup() {
  const [isLoading, setIsLoading] = useState(true);

  const [isLogginPage, setIsLoginPage] = useState(true);
  const { isLogged } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      console.log("here in startup");
      navigate("/products");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    console.log("startup");
    console.log(isLogged);
    setIsLoading(false);
  }, [isLogged]);

  const togglePage = () => {
    setIsLoginPage((prev) => !prev);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="startup-container">
      <div className="startup padded-border">
        <Container>
          <Row>
            <div className="title-container">
              <div className="image-container">
                <Image src={Logo} fluid />
              </div>
              <h3 className="title">
                {isLogginPage ? "Iniciar sesion" : "Registrate"}
              </h3>
            </div>
          </Row>
          <Row>{isLogginPage ? <Login /> : <Signup />}</Row>
          <Row>
            <div className="toggle-link">
              <p onClick={togglePage} className="text-info">
                {isLogginPage ? "Registrate aqui" : "Iniciar sesion"}
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
