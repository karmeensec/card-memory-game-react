import React from 'react'
import './Counter.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import PropTypes from 'prop-types'

const step = 2;

const Counter = ({ cardsCount, onClick }) => {

    const incrementCard = function(e) {

        e.preventDefault();
        const limit = cardsCount + step;

        if (limit <= 60) onClick(limit);

    }

    const decrementCard = function(e) {

        e.preventDefault();
        const limit = cardsCount - step;

        if (limit >= 2) onClick(limit);
    }


  return (

    <div className='total'>
        
            <button className='minus' onClick={decrementCard}> <AiOutlineMinus /> </button>
            <span className='total'> {cardsCount} </span>
            <button className='plus' onClick={incrementCard}> <AiOutlinePlus /> </button>

    </div>

  )
}

export default Counter

Counter.propTypes = {

    cardsCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,

}