import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../../context/auth/auth.context";
import img from "../../../../../assets/img/ecomerce.png";
import "./nav-home.css";

export const NavHome = () => {
  const navigate = useNavigate();
  const { logout, user, role } = useAuthContext();
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand style={{ marginRight: 0 }}>
          <Image src={img} style={{ height: "48px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Carrito</Nav.Link>
            <Nav.Link onClick={() => navigate("/history")}>Historial</Nav.Link>
            {role === "ADMIN" && (
              <Nav.Link onClick={() => navigate("/admin/products")}>
                Editar Productos{" "}
              </Nav.Link>
            )}
          </Nav>

          <section>
            <NavDropdown
              title={user?.firstName + " " + user?.lastName}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => logout()}>
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
          </section>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
