import { Container } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router-dom";
import { Counter } from "../../../components/counter/counter";
import { NavHome } from "./components/nav-home/nav-home";

export const Home = () => {
  return (
    <div>
      <NavHome />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
