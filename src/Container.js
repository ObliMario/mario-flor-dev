import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LeftBar } from "./LeftBar";

function Container({ children }) {
  return (
    <Row className="Container">
      <Col className="LeftBar">
        <LeftBar />
      </Col>
      <Col className="RightBar">{children}</Col>
    </Row>
  );
}

export { Container };
