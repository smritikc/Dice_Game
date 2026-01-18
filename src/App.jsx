import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import StartGame from './components/StartGame.jsx'
import GamePlay from './components/GamePlay.jsx'
import './App.css'





function App() {
const [isGameStarted,setIsGameStarted]=useState(false);
const toggleGamePlay=()=>{
setIsGameStarted((prev)=>!prev);

}

  return (
    <>  
    {isGameStarted ? <GamePlay /> :<StartGame toggle={toggleGamePlay}/>}
     
     </>
 
  );
}

export default App;
