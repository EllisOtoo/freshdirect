import React from "react";
import Product from "../components/Product";
import tomato from "../img/products/tomato.jpg";
import onion from "../img/products/red-onion-500x500b.jpg";
import chill from "../img/products/pepper.jpg";
import kontonmire from "../img/products/kontomire-1-bundle.jpg.png";
import ginger from "../img/products/ginger.jpg";
import gardenEggs from "../img/products/gardenEggs.jpg";
import tubers from "../img/products/tubers.jpg";
import garlic from "../img/products/garlic.jpg";

function FreshFoods() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
        justifyContent: "space-around",
        marginBottom: "70px",
      }}
    >
      <Product
        name={`Perpy's Fresh Tomatoes`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={8}
        imgsrc={tomato}
        seasonLow={true}
      />
      <Product
        name={`Nadia's Fresh Onions`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={3}
        imgsrc={onion}
        promo={20}
      />
      <Product
        name={`Felicity's Chilli Pepper`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={5}
        imgsrc={chill}
      />
      <Product
        name={`Johnsons's Kontomire`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        seasonLow={true}
        kiloPrice={3}
        imgsrc={kontonmire}
      />
      <Product
        name={`Kingley's Ginger`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={2}
        imgsrc={ginger}
        promo={10}
      />
      <Product
        name={`Bella's Garden Eggs`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={2.5}
        imgsrc={gardenEggs}
      />
      <Product
        name={`Musa's Yam`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={10}
        imgsrc={tubers}
      />
      <Product
        name={`Josephine's Garlic`}
        description={"Sample Description"}
        featureList={["Feature One", "Feature Two"]}
        kiloPrice={1}
        imgsrc={garlic}
      />
    </div>
  );
}

export default FreshFoods;
