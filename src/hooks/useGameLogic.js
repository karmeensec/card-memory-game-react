import React, { useEffect, useState } from 'react'
import { addUniqueIdPhotos, getFormedData, getPairedPhotos, shuffleCards } from '../utilities/utilities'

const useGameLogic = (photos) => {

    const [cards, setCards] = useState([]);


    const makeCards = function() {

        const formData = getFormedData(photos);

        const pairedPhotos = getPairedPhotos(formData);

        const uniqueIdPhotos = addUniqueIdPhotos(pairedPhotos);

        const shuffleCardPhotos = shuffleCards(uniqueIdPhotos);

        setCards(shuffleCardPhotos);

    }


    const cardClick = function(uniqueId) {

        console.log({uniqueId});

    }


    useEffect( ()=> {

        if (photos.length > 0) makeCards();

    }, [photos])


    return {cards, cardClick};
  
}

export default useGameLogic