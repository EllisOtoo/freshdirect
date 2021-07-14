import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

let Nav = styled.nav`
  // align-self: flex-end;
  // position: relative;
  // bottom: 10px;
`;
let Li = styled.li`
  // margin-right: 10px;
  // //   color: #ff8c00;
  // color: #000000;
  // font-size: 13pt;
`;

let Ul = styled.ul`
  // margin-left: 20px;
`;
function MainNavigationMenu({ setMount }) {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          // width: "30vw",
          fontSize: "16pt",
        }}
      >
        <Link to={"/contactUs"} onClick={() => setMount(false)}>
          <li>Contact Us</li>
        </Link>
        <li>About</li>
        {/* <li style={{ width: "25vw" }}>Blog</li> */}
        <li>Why Us?</li>
      </ul>
    </nav>
  );
}

export default MainNavigationMenu;
