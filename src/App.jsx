import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Board from './components/Board/Board'
import Settings from './components/Settings/Settings'
import useGetPhotos from './hooks/useGetPhotos'



function App() {

  const [gameOptions, setGameOptions] = useState(null);

  const startGame = function(options) {

    setGameOptions(options);

  }

  return (
    
    <>
      
      <Background />
      <h1>Card Memory Game</h1>

      {!gameOptions ? <Settings startGame = {startGame} /> : <Board gameOptions = {gameOptions} />}

      
      {/* {photos.length > 0 && <Board /> } */}

    </>
  )
}

export default App
