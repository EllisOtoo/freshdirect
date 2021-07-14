import React from "react";

function Payment() {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <p>Your Hostel or Delivery Address</p>
      <div style={{ display: "flex", flexDirection: "column", width: "50vw" }}>
        <input type="text" placeholder={"Your Contact Number"} />
        <input type="text" placeholder={"Location and Address "} />
      </div>

      <button>Pay Now</button>
    </div>
  );
}

export default Payment;
