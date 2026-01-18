// import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rollDice}) => {

  return (
    <DiceContainer>
       <div onClick={rollDice} className='dice'>
         <img src={
`/image/dice_${currentDice}.png`

         }
         alt="dice_1" /></div>
        <p>Click on the dice</p>

    </DiceContainer>
  )
}

export default RollDice  

const DiceContainer=styled.div`

display: flex;
flex-direction: column;
/* justify-content: center; */
margin-top: 48px;
align-items: center;
p{
font-size: 24px;
}
.dice{
    cursor: pointer;

}

`;
