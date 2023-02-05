import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Settings from './components/Settings/Settings'
import useGetPhotos from './hooks/useGetPhotos'



function App() {

  const [gameOptions, setGameOptions] = useState(null);

  const photos =  useGetPhotos(gameOptions);
  console.log(photos);

  const startGame = function(options) {

    setGameOptions(options);

  }

  return (
    
    <>
      
      <Background />
      <h1>Card Memory Game</h1>
      <Settings startGame = {startGame} />

    </>
  )
}

export default App
