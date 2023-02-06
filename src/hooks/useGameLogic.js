import React, { useEffect, useState } from 'react'
import { addUniqueIdPhotos, getFormedData, getPairedPhotos, shuffleCards } from '../utilities/utilities'


const MAX_VISIBLE_CARDS = 2;

const DIFFICULTIES = {

    Easy: 1500, 
    Medium: 1000,
    Hard: 500, 
    Extreme: 200,

}


const useGameLogic = (photos, gameDifficulty) => {

    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [score, setScore] = useState([]);
    const [isWon, setIswon] = useState(false);


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

            if (card.isShown) 
                setVisibleCards( previous => [...previous, card.uniqueId] )

            return card;

        })

        setCards(flippedCards);

    }


    const cardClick = function(clickCardUniqueId) {

        if (visibleCards.length < MAX_VISIBLE_CARDS)

            flipCard(clickCardUniqueId);

    }


    const updateScore = function() {

        setScore( previousScore => previousScore + 1 );

    }


    const checkMatch = function() {

        const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1);

        const matched = visible[0].id === visible[1].id;

        const updatedCards = cards.map(card => {

            if (visibleCards.indexOf(card.uniqueId) !== -1 ) {
                card.isShown = false;
                card.isFound = matched;
            }

            return card;

        })
        
        
        setTimeout( ()=> {

                setCards(updatedCards);
                setVisibleCards([]);
                if (matched) updateScore();

        }, DIFFICULTIES[gameDifficulty]);

    }


    useEffect( ()=> {

        if (photos.length > 0) makeCards();

    }, [photos]);



    useEffect( ()=> {

        if (visibleCards.length >= MAX_VISIBLE_CARDS) {            // our setState is asynchronous -> can be bigger than MAX_VISIBLE_CARDS
            
            checkMatch();
           
        }

    }, [visibleCards]);



    useEffect( ()=> {

        if (photos.length && score === photos.length) {

        }

    }, [score]);





    return {cards, cardClick};
  
}

export default useGameLogic