import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/footer.module.css";

function Footer() {
  return (
    <Container fluid className={style.footerStyleOne}>
      <Row style={{ padding: "5px 50px" }}>
        <Col style={{ textAlign: "center" }}>
          SnappyCarte 2021, Designed By InterrLogic, UPSA Hostel
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
