import React, { useEffect, useState } from "react";

function SmalllerWidget() {
  let [list, setList] = useState(["One", "Two", "Three"]);
  let [firstInputVal, setFirstInputVal] = useState("");

  return (
    <div>
      <input
        value={firstInputVal}
        onChange={(e) => setFirstInputVal(e.target.value)}
      />
      <div>
        {list.map((item, index) => (
          <div onlick={() => console.log(index)}>{"akakkaaasas"}</div>
        ))}{" "}
      </div>
      <button onClick={() => setList([...list, firstInputVal])}>
        Add Item
      </button>
    </div>
  );
}

export default SmalllerWidget;
