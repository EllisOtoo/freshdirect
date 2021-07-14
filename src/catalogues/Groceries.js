import React from "react";
import Product from "../components/Product";
import keysoap from "../img/products/keysoap.jpeg";

function Groceries() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginBottom: "70px",
      }}
    >
      <Product
        name={`Perpy's Fresh Tomatoes`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={2}
        imgsrc={keysoap}
      />
    </div>
  );
}

export default Groceries;
