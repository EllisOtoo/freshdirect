import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faChevronLeft,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import shopByList from "../styles/showByList.module.css";
import { Container, Row, Col } from "react-bootstrap";

let shoppingList = {
  position: "absolute",
  top: "40%",
  color: "white",
  left: "15%",
  padding: "20px 20px",
  borderRadius: "10px",
  backgroundColor: "#006400",
  fontSize: "16pt",
  zIndex: 100,
};

function ShopByList() {
  const [items, setItems] = useState([
    /*   {
      itemName: "Ginger",
      quantity: 3,
      isSelected: false,
    }, */
  ]);
  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(0);

  let toggleComplete = (index) => {
    let newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
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
                  {item.itemName}
                </span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span style={{ marginLeft: "10px" }}>{item.itemName}</span>
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="add-item-input"
          placeholder="Add an item..."
          style={{ marginRight: "10px", padding: "0px 10px" }}
        />
        <FontAwesomeIcon
          style={{ position: "relative", top: "5px" }}
          onClick={(e) => {
            setItems([
              ...items,
              { itemName: inputValue, quantity: 1, isSelected: false },
            ]);
            calculateTotal();
            setInputValue("");
          }}
          icon={faPlus}
        />
      </div>
      <div className="total" style={{ textAlign: "right" }}>
        Total:{totalItemCount}
      </div>
    </div>
  );
}

export default ShopByList;
