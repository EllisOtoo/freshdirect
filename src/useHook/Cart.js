import React, { useEffect, useState } from "react";

function Cart() {
  let [cart, setProduct] = useState([]);

  let addProduct = (product) => {
    setProduct([...cart, setProduct]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return {
    cart,
    addProduct,
  };
}

/* return () => {
    cleanup
} */

export default Cart;
