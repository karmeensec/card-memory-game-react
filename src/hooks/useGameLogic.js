import React, { useEffect } from 'react'
import { getFormedData, getPairedPhotos } from '../utilities/utilities'

const useGameLogic = (photos) => {


    const makeCards = function() {

        const formData = getFormedData(photos);
        console.log(formData);

        const pairedPhotos = getPairedPhotos(formData);
        console.log(pairedPhotos);

    }

    useEffect( ()=> {

        if (photos.length > 0) makeCards();

    }, [photos])
  
}

export default useGameLogic