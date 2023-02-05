import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'
import useGetImages from './hooks/useGetImages'


function App() {

  useGetImages();

  return (
    
    <>
      
      <Background />
    </>
  )
}

export default App
