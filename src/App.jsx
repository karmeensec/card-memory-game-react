import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import Settings from './components/Settings/Settings'
import useGetPhotos from './hooks/useGetPhotos'



function App() {

  const photos =  useGetPhotos();
  console.log(photos);

  return (
    
    <>
      
      <Background />
      <h1>Card Memory Game</h1>
      <Settings />

    </>
  )
}

export default App
