import React, { useEffect } from 'react'
import { getFormedData } from '../utilities/utilities'

const useGameLogic = (photos) => {


    const makeCards = function() {

        const formData = getFormedData(photos);
        console.log(formData);

    }

    useEffect( ()=> {

        if (photos.length > 0) makeCards();

    }, [photos])
  
}

export default useGameLogic