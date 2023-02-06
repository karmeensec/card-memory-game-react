import React, { useEffect, useState } from 'react'
import useGetPhotos from '../../hooks/useGetPhotos';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types'


const Board = ({ gameOptions }) => {

  const photos =  useGetPhotos(gameOptions);

  const [loader, setLoader] = useState(true);

  console.log({photos})


  useEffect( ()=> {

    if (photos.length > 0) setLoader(false);

  }, [photos])


  return (

    <div> {loader && <Loader /> } </div>

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