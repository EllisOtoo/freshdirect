import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import shopByList from "../styles/showByList.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../contexts/cartContext";

let shoppingList = {
  position: "absolute",
  top: "40%",
  color: "white",
  left: "25%",
  right: "25%",
  padding: "20px 20px",
  borderRadius: "10px",
  backgroundColor: "#006400",
  fontSize: "16pt",
  zIndex: 2000,
};

function ShopByList() {
  const [items, setItems] = useState([
    /*   {
      itemName: "Ginger",
      quantity: 3,
      isSelected: false,
    }, */
  ]);
  const [name, setInputValue] = useState("");
  const [price, setPrice] = useState(0);
  const [totalItemCount, setTotalItemCount] = useState(0);
  let { cart, addProduct } = useContext(CartContext);

  let toggleComplete = (index) => {
    let newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setTotalItemCount(totalItemCount);
  };

  return (
    <div style={shoppingList}>
      <h2 class={"userListSheet"}>Shop with your List!</h2>
      {items.map((item, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
            borderBottom: "1px solid ForestGreen",
          }}
        >
          <div className="item-name" onClick={() => toggleComplete(index)}>
            {item.isSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span
                  style={{ marginLeft: "10px" }}
                  className={shopByList.completed}
                >
                  {item.name}
                </span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span style={{ marginLeft: "10px" }}>{item.name}</span>
              </>
            )}
          </div>
          <div>
            <FontAwesomeIcon
              onClick={() => handleQuantityDecrease(index)}
              icon={faChevronLeft}
            />
            <span>{item.quantity} </span>
            <FontAwesomeIcon
              style={{ marginLeft: "-2px" }}
              onClick={() => handleQuantityIncrease(index)}
              icon={faChevronRight}
            />
          </div>
        </div>
      ))}
      <div
        className="add-item-box"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <input
          value={name}
          onChange={(e) => setInputValue(e.target.value)}
          className="add-item-input"
          placeholder="Add an item..."
          style={{ marginRight: "10px", padding: "0px 10px", width: "90%" }}
        />
        <FontAwesomeIcon
          style={{ position: "relative", top: "5px" }}
          onClick={(e) => {
            setItems([
              ...items,
              {
                name,
                quantity: 1,
                finalPr: 10,
                isSelected: false,
              },
            ]);
            calculateTotal();
            setInputValue("");
          }}
          icon={faPlus}
        />
      </div>
      <div className="total" style={{ textAlign: "right", margin: "5px 0" }}>
        <Button
          variant="success"
          onClick={() => addProduct([...cart, ...items])}
          class={"btn btn-success"}
        >
          Add to Cart
        </Button>{" "}
        <span>Total:{totalItemCount}</span>
      </div>
    </div>
  );
}

export default ShopByList;
