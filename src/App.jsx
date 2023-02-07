import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Board from './components/Board/Board'
import Settings from './components/Settings/Settings'
import useGetPhotos from './hooks/useGetPhotos'
import { FaRegCopyright } from 'react-icons/fa';



function App() {

  const [gameOptions, setGameOptions] = useState(null);

  const startGame = function(options) {

    setGameOptions(options);

  }


  const restartGame = function() {

    setGameOptions(null)

  }

  return (
    
    <>
      
      <Background />
      <h1>Card Memory Game</h1>
      <footer> <FaRegCopyright /> Kamil Ismayilzada</footer>

      {!gameOptions ? <Settings startGame = {startGame} /> : <Board gameOptions = {gameOptions} restartGame = {restartGame} />}

      
      {/* {photos.length > 0 && <Board /> } */}

      
    </>
  )
}

export default App
