import React, { useEffect, useState } from "react";

function Cart() {
  let [cart, setProduct] = useState([]);

  let addProduct = (product) => {
    setProduct([...cart, setProduct]);
  };

  useEffect(() => {
    console.log("hello", cart);
  }, [cart]);

  return {
    cart,
    addProduct,
  };
}

export default Cart;
