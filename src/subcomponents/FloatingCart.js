import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useComponentVisible from "../useHook/useComponentVisible";

function FloatingCart({ cart, runTotal, setMount, showCart, setCart }) {
  const divEl = useRef(null);

  return (
    <div
      ref={divEl}
      style={{
        textAlign: "right",
        position: "absolute",
        right: "-15px",
        top: "33px",
        zIndex: "200",
        borderRadius: "10px",
        width: "25vw",
        padding: "10px 10px",
        backgroundColor: "lightGreen",
        // marginRight: "50px",
      }}
    >
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {cart.map((item, index) => (
          <li key={index}>{`${item.name} ${item.finalPr}`} </li>
        ))}
      </ul>
      <hr />
      <div>
        Total Amount to Pay:{" "}
        <span style={{ fontWeight: "700" }}>
          {cart.length < 1 ? 0 : `GHS ${runTotal()}`}
        </span>
      </div>
      <Link to="/checkout">
        <Button
          onClick={() => setMount(false)}
          style={{ margin: "10px 0" }}
          variant={"success"}
        >
          CheckOut
        </Button>
      </Link>
    </div>
  );
}

export default FloatingCart;
