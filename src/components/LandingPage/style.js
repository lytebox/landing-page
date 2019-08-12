import styled from "styled-components";
import whiteBackground from './white-background.png';


export const LandingPageContainer = styled.div`
    .sec1{
    position: relative;
    margin: 0;
    padding: 0;
    background: #006EE5;
    width: 100%;
    height: 130vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    }
    
    .first-sentences{
        position: relative;
        top: 30px;
        width:100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: sans-serif;
        font-size: 45px;
        line-height: 71px;
        text-align: center;

        color: #FFFFFF;

        z-index:1;
    }

    .first-sentences p {
        font-size: 25px;
        line-height: 35px;
    }
    #curve{
        position: absolute;
        bottom: -1px;
        width: 100%;
    }

    #curve path{
        fill: #E5E5E5;
    }

    .first-buttons{
        display: flex;
        justify-content: center;
    }
    .first-buttons div{
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

    .butt-try{
        background-color: #FFFFFF;
        color: #006EE5;
    }
    .butt-pricing{
        border: 3.51562px solid #FFFFFF;
        background-color: #006EE5;
        box-sizing: border-box;
    }


    .box{
        width: 983.75px;
        height: 517px;
        position: absolute;
        bottom: -120px;
        background-image: url(${whiteBackground});
        z-index:2;
        box-shadow: 0px 5.289px 34.3785px rgba(0, 0, 0, 0.09);
        border-radius: 6.61125px;
        text-align: center;

    }
    .box h1{
        color: #006EE5;
        font-size: 48px;
        line-height: 61px;
        margin-top: 190px;
    }
    .box p{
        margin-top: 130px;
        font-size: 22px;
        line-height: 28px;
        color: #31393C;
        font-weight: bold;
        cursor: pointer;
    }
    .sec2{
        width: 100%;
        height:200vh;
        background-color: #E5E5E5;
        padding-top: 250px;
        display: flex;
        justify-content: center;
        
    }

    .rectangle{
        background: linear-gradient(90deg, #006EE5 0%, #388FEE 81.29%);
        border-radius: 61px;
        width: 131px;
        height: 21px;
    }

`;