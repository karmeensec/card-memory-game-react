import { useState } from 'react'
import './App.css'
import Background from './components/Background/Background'

const MAIN_URL =  'https://api.pexels.com/v1/search?query=nature';


function App() {

 


  fetch(constructURL(), {

    headers: {
      Authorization: import.meta.env.VITE_REACT_API_AUTH_KEY,
    }
  
  })



  return (
    
    <>
      
      <Background />
    </>
  )
}

export default App
