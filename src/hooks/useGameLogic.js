import React, { useEffect, useState } from 'react'
import { addUniqueIdPhotos, getFormedData, getPairedPhotos, shuffleCards } from '../utilities/utilities'

const useGameLogic = (photos) => {

    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);


    const makeCards = function() {

        const formData = getFormedData(photos);

        const pairedPhotos = getPairedPhotos(formData);

        const uniqueIdPhotos = addUniqueIdPhotos(pairedPhotos);

        const shuffleCardPhotos = shuffleCards(uniqueIdPhotos);

        setCards(shuffleCardPhotos);

    }


    const flipCard = function(clickCardUniqueId) {

        const flippedCards = cards.map( card => {

            if (card.uniqueId === clickCardUniqueId) {
                card.isShown = true;
            }

            return card;

        })

        setCards(flippedCards);

    }


    const cardClick = function(clickCardUniqueId) {

        flipCard(clickCardUniqueId);

    }


    useEffect( ()=> {

        if (photos.length > 0) makeCards();

    }, [photos])


    return {cards, cardClick};
  
}

export default useGameLogic