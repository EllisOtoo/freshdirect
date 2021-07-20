import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/footer.module.css";

function Footer() {
  return (
    <Container fluid className={style.footerStyleOne}>
      <Row style={{ padding: "20px 50px" }}>
        <Col style={{ textAlign: "center" }}>
          SnappyCarte 2021, Designed By InterrLogic, UPSA Hostel
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

// <div
//   style={{
//     textAlign: "center",
//     backgroundColor: "orange",
//     // display: "flex",
//     // justifyContent: "space-between",
//     // padding: "10px 100px",
//     color: "black",
//     left: "0px",
//     bottom: "0px",
//     width: "100%",
//     marginTop: "20px",
//     color: "brown",
//   }}
// >
//   c
//   <div>SnappyCarte 2021</div>
// </div>
