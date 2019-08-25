import React, { Component } from "react";
import posed from "react-pose";

import { NavBarContainer } from "./style";


const Menu = posed.div({
  shown: {
    x: 0,
    transition: {
      duration: 400,
      ease: "anticipate"
    }
  },
  unshown: {
    x: screen.width
  }
})

class NavBar extends Component {
  state = {
    showMenu: false
  }
  clickHandler = () => {
      this.setState({showMenu: !this.state.showMenu})
  }
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
          <div className="burger" onClick={this.clickHandler}>
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
        <Menu className="menu" pose={this.state.showMenu ? "shown" : "unshown"}>
          <div className="close-container">
            <svg className="close" onClick={this.clickHandler} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 20.188L15.685 11.979L23.885 3.697L20.188 0L11.976 8.318L3.666 0.115L0 3.781L8.321 12.021L0.115 20.334L3.781 24L12.018 15.682L20.303 23.885L24 20.188Z" fill="white"/>
            </svg>
          </div>
          <a href="#"><h1>PRODUCTS</h1></a>
          <a href="#"><h1>PARTNERS</h1></a>
          <a><div className="login"><p>Login</p></div></a>
        </Menu>
      </NavBarContainer>
    );
  }
}

export default NavBar;
