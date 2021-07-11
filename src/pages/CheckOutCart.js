import React from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
// import { Button } from "bootstrap";
import Payment from "../components/Payment";

let Div = styled.div`
  margin: 20px 20px;
  height: 1000px;
`;

function CheckOutCart({ cart }) {
  let runTotal = (sum = 0) => {
    cart.forEach((item, index) => {
      sum += item.finalPr;
    });
    console.log(sum);
    return sum;
  };
  return (
    <Div style={{ width: "70vw", margin: "0 auto" }}>
      <Table>
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.length < 1 ? (
            <span style={{ fontSize: "16pt" }}>Cart is Empty!</span>
          ) : (
            cart.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{`GHS ${item.finalPr}`}</td>
              </tr>
            ))
          )}
          <tr>
            {" "}
            <td colSpan={2}> Total Items in Cart is: </td>{" "}
            <td
              style={{ fontWeight: "700" }}
              colSpan={1}
            >{`GHS ${runTotal()}`}</td>
          </tr>
        </tbody>
      </Table>
      <Payment />
    </Div>
  );
}

export default CheckOutCart;
