import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

let Valueprop = styled.div`
  //   display: none;
  background-color: yellow;
  padding: 10px 50px;
  width: calc(100% / 3);
  text-align: center;
  font-family: "Roboto";
  border-right: 1px solid #bfbb8c; ;
`;

function StrongValueProps() {
  return (
    <Container
      fluid
      style={{ marginTop: "10px", backgroundColor: "yellow", padding: "5px" }}
    >
      <Row>
        <Col style={{ textAlign: "center" }}>Snappy Delivery to Hostel</Col>
        <Col style={{ textAlign: "center" }}>Pay On Delivery</Col>
        <Col style={{ textAlign: "center" }}>100% Natural</Col>
      </Row>
    </Container>
  );
}

export default StrongValueProps;
