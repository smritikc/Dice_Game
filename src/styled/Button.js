import styled from "styled-components";
export const Button = styled.button`
 
 padding: 10px 18px;
    background-color: #000000; 
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid transparent;
    min-width: 220px;
    height: 44px;
color: #FFFFFF;
cursor: pointer;
transition: 0.4s background ease-in;

    &:hover{
    background-color: #FFFFFF;
    cursor: pointer;
    border: 1px solid #000000;
    color: #000000;
    transition: 0.3s background ease-in;
    }


 `;

 export const OutlineButton = styled(Button)`
 background-color: #FFFFFF;
 border: 1px solid black;
 color: black;
     &:hover{
    background-color:black;
    cursor: pointer;
    border: 1px solid transparent;
    color: #FFFFFF;
     }
 `;