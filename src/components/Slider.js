import React from "react";
import { Carousel } from "react-bootstrap";
import herobanner from "../img/heroBanner.jpg";
import slideOne from "../img/slideOne.jpg";
import slideTwo from "../img/slideTwo.jpg";
import "../App.css";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slideOne} alt="First slide" />
        {/*      <Carousel.Caption style={{ top: "150px" }}>
          <h3 className={"display-1"}>Fresh Foods and Recipes!</h3>
          <p className={"display-4 "}>Nulla vitae elit libero, a pharetra.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
