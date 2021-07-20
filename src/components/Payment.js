import React, { useState } from "react";
import styles from "styled-components";
import { InputGroup } from "react-bootstrap";
// import { useState } from "react";
let Input = styles.input`
border-radius: 10px
`;

function Payment() {
  let [orderSucess, setOrder] = useState(false);

  let placeorder = () => {
    setTimeout(() => setOrder(!orderSucess), 2000);
    setTimeout(() => setOrder(!orderSucess), 5000);
  };

  return (
    <div
      style={{ backgroundColor: "#eee", width: "50vw", padding: "20px 20px" }}
    >
      <p>Your Hostel or Delivery Address</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "120px",
        }}
      >
        <InputGroup type="text" placeholder={"Your Contact Number"} />
        <Input type="text" placeholder={"Hostel Name"} />
        <Input type="text" placeholder={"Location and Address "} />
        <Input type="text" placeholder={"Phone Number"} />
      </div>
      {orderSucess ? (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            fontSize: "16pt",
          }}
        >
          Order Succesful
        </div>
      ) : (
        ""
      )}
      <button onClick={placeorder}>Place Order</button>
    </div>
  );
}

export default Payment;
