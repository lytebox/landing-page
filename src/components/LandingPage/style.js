import styled from "styled-components";
import whiteBackground from "./white-background.png";
import emailBackground from "./email-background.png";
import unnamed from "./unnamed.png";


export const LandingPageContainer = styled.div`
    *{
        font-family: "Circular";
    }
    
  .sec1 {
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
    width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 45px;
    line-height: 71px;
    text-align: center;

    color: #ffffff;

    z-index: 1;
  }
  .first-sentences > h1{
    margin-bottom:0;
  }

  .first-sentences p {
    font-size: 25px;
    line-height: 35px;
  }
  .first-sentences > p{
    font-size: 30px;
    width: 660px;
    margin: 50px;
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
    width: 220px;
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
    margin: 0 auto;
    width: 600px;
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
    background-color: #ffffff;
    padding-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .sec2 h1 {
    width: 700px;
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
  .sec2 > p{
      width: 700px;
  }
  .sec2 .goodbye{
      width: 800px;
  }

  .sec2 .announce{
    width: 720px;
  }

  .sec2 .tools{
    width: 750px;
  }

  .sec3 h1{
      width: 600px;
  }
  .sec3 p{
      width: 730px;
  }

  .rectangle {
    background: linear-gradient(90deg, #006ee5 0%, #388fee 81.29%);
    border-radius: 61px;
    height: 25px;
    width: 131px;
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
  .more-mobile{
    display: none;
  }
  .venues{
    display:flex;
    margin-bottom:50px;
  }
  .venue{
    height:325px;
    width:325px;
    background-image: url(${unnamed});
    background-size: cover;
  }

  .recommend {
    margin: 0 auto;
    background: linear-gradient(118.06deg, #ffffff 0.03%, #f7f7f7 98.99%);
    box-shadow: 0px 1.89379px 12.3097px rgba(0, 0, 0, 0.09);
    border-radius: 2.36724px;
    width: 352.25px;
    height: 180px;
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
   .bottom{
     margin-top: 200px;
     margin-bottom: 100px;
   }
   .bottom > p{
     margin:15px;
   }
   .bottom > div > svg{
      margin: 0 10px 0 10px;
      cursor: pointer;
   }

   @media screen and (max-width:943px){
     .first-sentences > h1{
       font-size: 50px;
       width: 600px;
     }
      .first-sentences > p{
        width: 450px;
      }
      .box{
        width: 750px;
        height: 400px;
        bottom: -50px;
      }
      .box h1 {
      width: 500px;
      font-size: 40px;
      margin-top: 130px;
    }
      .box p {
        margin-top: 80px;
      }
      .sec2 > h1{
        width: 600px
      }
      .sec2 > p{
        font-size: 45px;
        line-height: 50px;
      }
      .logos {
        display: grid;
        grid-template-columns: 300px 300px;
        width: 100%;

      }
      .feature{
        width: 300px;
        margin-bottom: 50px;
      }

      .more{
        display: none;
      }
      .logos .more-mobile{
        width: 300px;
        display: block;
        font-size: 45px;
        display: flex;
        align-items: center;
      }
  }
`;
