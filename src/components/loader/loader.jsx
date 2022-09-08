import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = ({ noFullScreen = false, ...rest }) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={noFullScreen ? {} : { height: "100vh" }}
      {...rest}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
