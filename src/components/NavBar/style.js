import styled from 'styled-components';

export const NavBarContainer = styled.div`
    nav{
        font-family: "Circular";
        background-color: #006ee5;
        height: 110px;
        padding: 0 50px 0 50px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        
    }
    ul{
        list-style:none;
        padding: 0;
        display: flex;
        justify-content: space-around;
        width: 500px;

    }
    ul a{
        text-decoration: none;
        color: white;
        font-size: 18px;
        line-height: 23px;
    }
`;