import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import useGetPhotos from './hooks/useGetPhotos'


function App() {

  const photos =  useGetPhotos();
  console.log(photos);

  return (
    
    <>
      
      <Background />
    </>
  )
}

export default App
