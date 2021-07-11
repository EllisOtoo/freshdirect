import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function SayHiClosure({ data }) {
  let listItems = ["one", "two"];
  let [indexVal, setIndexVal] = useState("");
  let SayHi = (index, item) => {
    console.log(item);
    console.log(` Hi ${index}`);
  };

  let getRandomNumbers = Math.random();

  useEffect(() => {
    console.log("Child Component Prop Changed");
    return () => {
      console.log("Clean Up Code Run!");
    };
  }, [data]);

  return (
    <div>
      <ul>
        {listItems.map((item, index) => (
          <Button>
            <li
              key={index}
              onClick={() => {
                SayHi(index, item);
                setIndexVal((prev) => prev + 1);
              }}
            >
              {`${item} idx: ${indexVal + index} and ${data}`}
            </li>
          </Button>
        ))}
      </ul>
    </div>
  );
}

export default SayHiClosure;
