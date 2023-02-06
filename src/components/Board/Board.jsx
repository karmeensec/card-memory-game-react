import React, { useEffect, useState } from 'react'
import useGetPhotos from '../../hooks/useGetPhotos';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types'
import useGameLogic from '../../hooks/useGameLogic';
import Card from '../Card';
import Result from '../Result/Result';


const Board = ({ gameOptions }) => {

  const photos =  useGetPhotos(gameOptions);

  const [loader, setLoader] = useState(true);

  const {cards, cardClick, isWon} =  useGameLogic(photos, gameOptions.difficulty);

  useEffect( ()=> {

    if (photos.length > 0) setLoader(false);

  }, [photos])


  return (

    <div> 

      {isWon && <Result />}
      {loader && <Loader /> }
      {!loader && cards.map(card => <Card card = {card} key = {card.uniqueId} cardClick = {cardClick} /> ) }

    </div>

  )
}

export default Board


Board.proptypes = {

  gameOptions: PropTypes.shape({

    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,

  })

}