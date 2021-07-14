import React, { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CartContext } from "../contexts/cartContext";
// import { Button } from "react-bootstrap";

function Product({ name, description, featureList, imgsrc, kiloPrice }) {
  let [Qty, setQty] = useState(0);
  let finalPrice = (perKilo) => perKilo * Qty;

  let { cart, addProduct } = useContext(CartContext);

  return (
    <Card style={{ width: "360px", marginBottom: "10px" }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>
          {name}{" "}
          <span
            style={{
              backgroundColor: "yellow",
              padding: "0px 10px",
              borderRadius: "10%",
            }}
          >
            GHc {kiloPrice}
          </span>
        </Card.Title>
        <Card.Text>
          <ul>
            {featureList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>{description}</p>
        </Card.Text>
        <Button
          variant={"success"}
          onClick={() =>
            addProduct([
              ...cart,
              //   { name, description, finalPrice: finalPrice(kiloPrice) },
              { name, description, finalPr: finalPrice(kiloPrice) },
            ])
          }
          // style={{ backgroundColor: "green", marginRight: "15px" }}
        >
          Add To Cart
        </Button>
        <span style={{ fontWeight: "700", marginRight: "10px" }}>
          Qty: {Qty}
        </span>
        <span
          onClick={() => setQty(Qty + 1)}
          style={{
            padding: "0px 5px",
            color: "green",
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: "50%",
            fontSize: "18pt",
            // paddingTop: "2px",
          }}
        >
          +
        </span>{" "}
        <span
          onClick={() => setQty(Qty - 1)}
          style={{
            padding: "0px 7px",
            color: "red",
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: "50%",
            fontSize: "18pt",
            marginLeft: "6px",
            // paddingTop: "2px",
          }}
        >
          -
        </span>{" "}
        GHS<span style={{ fontWeight: "500" }}> {finalPrice(kiloPrice)}</span>
      </Card.Body>
    </Card>
  );
}

export default Product;
