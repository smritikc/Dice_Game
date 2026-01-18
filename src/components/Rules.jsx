import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className='text'>
            <p>Select any number</p>
            <p>then click dice</p>
            <p><h3>Win Condition:</h3> Your selected number matches the random number

<p>Reward: Random number value added to your score</p>

 </p>
 <p><h3>Lose Condition:</h3> Your selected number does NOT match the random number

<p>Penalty: 2 points deducted from your score</p></p>
        </div>
    </RulesContainer>
  )
};

export default Rules;

const RulesContainer=styled.div`
  background-color  : #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  h2{
    font-size: 24px;
    
  }
  .text{
    margin-top: 24px;

  }
`;