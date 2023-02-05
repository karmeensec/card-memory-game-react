import React from 'react'
import useGetPhotos from '../../hooks/useGetPhotos';

const Board = ({ gameOptions }) => {

  const photos =  useGetPhotos(gameOptions);
  console.log({photos})

  return (

    <div>Board</div>

  )
}

export default Board