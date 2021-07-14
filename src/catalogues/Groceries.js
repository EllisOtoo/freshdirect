import React from "react";
import Product from "../components/Product";
import keysoap from "../img/products/keysoap.jpeg";
// import milo from "../img/products/keysoap.jpeg";
import milo from "../img/products/miloTin.jpeg";
import sugar from "../img/products/sugar.jpeg";
// import keysoap from "../img/products/keysoap.jpeg";

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
        name={`Keysoap Bar`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={2}
        imgsrc={keysoap}
      />
      <Product
        name={`Milo Tin`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={22}
        imgsrc={milo}
      />
      <Product
        name={`Sugar`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={5}
        imgsrc={sugar}
      />
    </div>
  );
}

export default Groceries;
