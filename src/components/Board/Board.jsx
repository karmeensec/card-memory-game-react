import React, { useEffect, useState } from 'react'
import useGetPhotos from '../../hooks/useGetPhotos';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types'
import useGameLogic from '../../hooks/useGameLogic';
import Card from '../Card';
import Result from '../Result/Result';
import styles from './Board.module.css'


const Board = ({ gameOptions, restartGame }) => {

  const photos =  useGetPhotos(gameOptions);

  const [loader, setLoader] = useState(true);

  const {cards, cardClick, isWon} =  useGameLogic(photos, gameOptions.difficulty);

  useEffect( ()=> {

    if (photos.length > 0) setLoader(false);

  }, [photos])


  return (

    <div> 

      {isWon && <Result restartGame = {restartGame} />}
      {loader && <Loader /> }
      {!loader &&  <div className={`${styles.board}`} >{ (cards.map(card => <Card card = {card} key = {card.uniqueId} cardClick = {cardClick} /> )) }</div>}

    </div>

  )
}

export default Board


Board.proptypes = {

  gameOptions: PropTypes.shape({

    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,

  }),

  restartGame: PropTypes.func.isRequired,

}