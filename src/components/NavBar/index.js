import React, { Component } from "react";
import { NavBarContainer } from "./style";

class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <nav>
          <div className="logo" />
          <ul>
            <li>
              <a href="#">PRODUCTS</a>
            </li>
            <li>
              <a href="#">PARTNERS</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
          <div className="burger">
            <svg
              width="41"
              height="13"
              viewBox="0 0 41 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="41" height="5" rx="2.5" fill="white" />
              <rect x="17" y="8" width="24" height="5" rx="2.5" fill="white" />
            </svg>
          </div>
        </nav>
      </NavBarContainer>
    );
  }
}

export default NavBar;
