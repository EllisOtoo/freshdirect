import React, { useState, useEffect } from "react";
import logo from "../img/SnappyCarte.jpg";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../contexts/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useComponentVisible from "../useHook/useComponentVisible";
import FloatingCart from "../subcomponents/FloatingCart";
import MainNavigationMenu from "../subcomponents/MainNavigationMenu";
// import useComponentVisible from "../useHook/useComponentVisible";
import { Container, Row, Col } from "react-bootstrap";

let Sitelogo = styled.img`
  width: 200px;
`;

let SiteNav = styled.nav`
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
`;

function Head({ cart }) {
  const { setMount } = useContext(CartContext);
  let [showCart, setCart] = useState(false);
  let [currentTotal, setTotal] = useState(0);

  let runTotal = (sum = 0) => {
    cart.forEach((item, index) => {
      sum += item.finalPr;
    });
    console.log(sum);
    return sum;
  };

  function sayHello() {
    console.log("hello");
    return "";
  }
  return (
    <Container style={{ marginTop: "15px" }}>
      <Row className="align-items-center">
        <Col lg={4} xs={12}>
          <Link onClick={() => setMount(true)} to={"/"}>
            <Sitelogo src={logo} alt="" />
          </Link>
        </Col>

        <Col lg={6} xs={12}>
          <MainNavigationMenu setMount={setMount} />
        </Col>
        <Col lg={1} xs={6}></Col>
        <Col lg={1} xs={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaCartPlus style={{ marginRight: "10px", fontSize: "16pt" }} />{" "}
            <p
              style={{
                // marginTop: "18px",
                marginRight: "7px",
                fontSize: "16pt",
              }}
            >
              {" "}
              Cart:{" "}
            </p>
            <div
              style={{ fontSize: "16pt" }}
              onClick={() => {
                setCart(!showCart);
              }}
              style={{
                backgroundColor: "green",
                padding: "2px 10px",
                borderRadius: "50px",
                color: " white",
                cursor: "pointer",
                marginTop: "-12px",
              }}
            >
              {cart.length}
            </div>
          </div>
          {showCart ? (
            <FloatingCart
              showCart={showCart}
              setCart={setCart}
              cart={cart}
              runTotal={runTotal}
              setMount={setMount}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Head;

// cart.reduce((prev, next) => prev.finalPr + next.finalPr);
