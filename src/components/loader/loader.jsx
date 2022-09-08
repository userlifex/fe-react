import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
