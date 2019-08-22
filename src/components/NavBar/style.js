import styled from "styled-components";
import logo from "./logo.svg";
import logoMobile from "./logo-mobile.svg";

export const NavBarContainer = styled.div`
  nav {
    box-sizing: border-box;
    font-family: "Circular";
    background-color: #006ee5;
    height: 110px;
    width: 100%;
    padding: 0 30px 0 30px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 10px;
  }
  .logo {
    width: 256px;
    height: 100px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-size: contain;
  }

  .burger {
    display: none;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    width: 500px;
  }
  ul a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    line-height: 23px;
  }

  @media screen and (max-width: 943px) {
    ul {
      display: none;
    }
    .logo {
      width: 50%;
      background-image: url(${logoMobile});
    }
    .burger {
      display: block;
    }
    .burger svg {
      width: 100px;
      height: 50px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 537px) {
    .burger svg {
      width: 80px;
      height: 40px;
    }
    .logo {
      width: 60px;
    }
  }
`;
