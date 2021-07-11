import React from "react";
import Product from "./Product";
import { CardColumns, Card } from "react-bootstrap";
import SmoothieOne from "../img/products/smoothieRecipe01.jpg";
function Catalogue() {
  return (
    <div style={{ padding: "10px 10px" }}>
      <Product imgsrc={SmoothieOne} />
    </div>
  );
}

export default Catalogue;
