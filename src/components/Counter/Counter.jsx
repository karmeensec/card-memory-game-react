import React from 'react'
import './Counter.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const Counter = () => {

  return (

    <div className='total'>
        
            <button className='minus'> <AiOutlineMinus /> </button>
            <span className='total'> 10 </span>
            <button className='plus'> <AiOutlinePlus /> </button>

    </div>

  )
}

export default Counter