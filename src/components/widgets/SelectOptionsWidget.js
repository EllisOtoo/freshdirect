import React from "react";
import { Button } from "react-bootstrap";

//* WILL CONTINUE BUILDING LATER

function SelectOptionsWidget({ options }) {
  // let buttonButtomPosi = ["0px", "10px", "140px"];
  // let positonsOptions = ["absolute", "relative"];

  return (
    <ul
      style={{
        listStyle: "none",
        width: "200px",
        position: "relative",
        bottom: "20px",
      }}
    >
      {options.map((item, index) => (
        <li
          style={{ backgroundColor: "silver", marginBottom: "1px" }}
          key={index}
        >
          {" "}
          item No{index}
        </li>
      ))}
    </ul>
  );
}

export default SelectOptionsWidget;
