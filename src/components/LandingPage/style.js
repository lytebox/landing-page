import styled from "styled-components";
import whiteBackground from "./white-background.png";
import emailBackground from "./email-background.png";

export const LandingPageContainer = styled.div`
<<<<<<< HEAD

    section{
        min-width: 1012px;
    }
    .sec1{
=======
  font-family: "Circular";
  .sec1 {
>>>>>>> 6a64d07d39887dd1e49947254a753b61c825cb42
    position: relative;
    margin: 0;
    padding: 0;
    background: #006ee5;
    width: 100%;
    height: 130vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sec1 h1 {
    font-weight: bold;
  }

  .first-sentences {
    position: relative;
    top: 30px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 45px;
    line-height: 71px;
    text-align: center;

    color: #ffffff;

    z-index: 1;
  }

  .first-sentences p {
    font-size: 25px;
    line-height: 35px;
  }
  #curve {
    position: absolute;
    bottom: -1px;
    width: 100%;
  }

  #curve path {
    fill: #ffffff;
  }

  .first-buttons {
    display: flex;
    justify-content: center;
  }
  .first-buttons div {
    margin-left: 40px;
    margin-right: 40px;
    height: 75px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .butt-try {
    background-color: #ffffff;
    color: #006ee5;
  }
  .butt-pricing {
    border: 3.51562px solid #ffffff;
    background-color: #006ee5;
    box-sizing: border-box;
  }

  .box {
    width: 983.75px;
    height: 517px;
    position: absolute;
    bottom: -120px;
    background-image: url(${whiteBackground});
    z-index: 2;
    box-shadow: 0px 5.289px 34.3785px rgba(0, 0, 0, 0.09);
    border-radius: 6.61125px;
    text-align: center;
  }
  .box h1 {
    color: #006ee5;
    font-size: 48px;
    line-height: 61px;
    margin-top: 190px;
  }
  .box p {
    margin-top: 130px;
    font-size: 22px;
    line-height: 28px;
  }
  .box p a {
    color: #31393c;
    text-decoration: none;
  }
  .sec2 {
    width: 100%;
    height: 210vh;
    background-color: #ffffff;
    padding-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .sec2 h1 {
    font-size: 60px;
    line-height: 75px;
    text-align: center;

    height: 142px;
    left: 375px;
    top: 1339px;
    margin-bottom: 30px;
    color: #006ee5;
    font-weight: bold;
  }

  .sec2 p {
    font-size: 28px;
    line-height: 35px;
    color: #000000;
  }

  .rectangle {
    background: linear-gradient(90deg, #006ee5 0%, #388fee 81.29%);
    border-radius: 61px;
    width: 131px;
    height: 50px;
  }
  .logos {
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  .feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .feature h3 {
    font-size: 28px;
    margin-bottom: 0;
  }
  .feature p {
    font-size: 22px;
    margin-bottom: 25px;
  }
  .butt {
    width: 192.19px;
    height: 75px;
    border-radius: 5.85938px;
    font-size: 22px;
    line-height: 28px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .try {
    background: #006ee5;
    cursor: pointer;
  }
  .soon {
    background: #8e8e8e;
  }

  .more {
    margin-top: 70px;
    margin-bottom: 100px;
  }

  .recommend {
    background: linear-gradient(118.06deg, #ffffff 0.03%, #f7f7f7 98.99%);
    box-shadow: 0px 1.89379px 12.3097px rgba(0, 0, 0, 0.09);
    border-radius: 2.36724px;
    width: 352.25px;
    height: 300px;
    position: relative;
    bottom: -50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .recommend p {
    color: #006ee5;
    font-size: 18px;
    margin: 10px;
    font-weight: bold;
  }
  .chrome {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chrome svg {
    margin-right: 5px;
  }

  .sec3 {
    padding-top: 120px;
    color: #ffffff;
    height: 150vh;
    background-color: #006ee5;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sec3 h1 {
    font-size: 56px;
    line-height: 71px;
    margin-bottom: 30px;
  }

  .sec3 p {
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 30px;
  }

  .email {
    width: 984px;
    height: 350px;
    border-radius: 6.61125px;
    background-image: url(${emailBackground});
    background-size: cover;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
  }
  .email h4 {
    margin-top: 120px;
    color: #006ee5;
    text-align: left;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 10px;
  }
  .email form {
    text-align: left;
  }
  .email form input {
    width: 499px;
    height: 60px;
    background: #d9d9d9;
    border-radius: 10px;
  }
  .email form button {
    background: #006ee5;
    border-radius: 5.85938px;
    color: #ffffff;
    font-size: 22px;
    line-height: 28px;
    width: 192.19px;
    height: 75px;
    margin-left: 25px;
    cursor: pointer;
   }

`;
