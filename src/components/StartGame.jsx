import React from 'react'
import styled from 'styled-components';


const StartGame = ({toggle}) => {

  return (
   <Container>
<div>
        <img src="/image/game-logo.png" alt="" />
</div>
    <div className='content'>
        <h1>Dice Game</h1>
<Button onClick={toggle} >play now</Button>
    </div>
   </Container>
  )
}

export default StartGame;

const Container = styled.div`

 max-width: 1180px;
 margin: 0 auto;
 display: flex;
 align-items: center;
 height: 100vh;



    .content{
    h1{
        font-size: 96px;
        white-space: nowrap;
        margin:0 auto;
        }

    }
 `;

 const Button = styled.button`
 
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