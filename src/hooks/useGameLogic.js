import React, { useEffect, useState } from 'react'
import { addUniqueIdPhotos, getFormedData, getPairedPhotos, shuffleCards } from '../utilities/utilities'

const useGameLogic = (photos) => {

    const [cards, setCards] = useState([]);


    const makeCards = function() {

        const formData = getFormedData(photos);
        console.log(formData);

        const pairedPhotos = getPairedPhotos(formData);
        console.log(pairedPhotos);

        const uniqueIdPhotos = addUniqueIdPhotos(pairedPhotos);
        console.log(uniqueIdPhotos);

        const shuffleCardPhotos = shuffleCards(uniqueIdPhotos);
        console.log(shuffleCardPhotos);

    }

    useEffect( ()=> {

        if (photos.length > 0) makeCards();

    }, [photos])
  
}

export default useGameLogic