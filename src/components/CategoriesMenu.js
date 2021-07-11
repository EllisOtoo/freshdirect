import React from "react";
import { Link } from "react-router-dom";

function CategoriesMenu() {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        fontSize: "16pt",
        width: "400px",
        margin: "20px auto",
        justifyContent: "space-around",
        padding: "10px 0",
      }}
    >
      <Link to="/">
        <li>FreshFoods</li>
      </Link>
      <Link to="/groceries">
        <li>Groceries</li>
      </Link>
      <Link to="/recipes">
        <li>Recipes</li>
      </Link>
    </ul>
  );
}

export default CategoriesMenu;
