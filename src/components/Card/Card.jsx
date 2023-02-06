import React from 'react'
import Photo from '../Photo/Photo';
import styles from './Card.module.css';
import PropTypes from 'prop-types'

const Card = ({ card, cardClick }) => {

    const onClick = function() {

        if (card.isShown || card.isFound) return;

        cardClick(card.uniqueId);
    }

  return (

    <div className={`${styles.container}`} onClick = {onClick}>

        <div className={`${styles.card} ${card.isShown ? styles.flipped : ''} `}>

            <div className={`${styles.front} ${card.isFound ? styles.found : ''}`}></div>
            <div className={`${styles.back}`}>
                <Photo url={card.url} />
            </div>

        </div>

    </div>

  )
}

export default Card

Card.prototype = {

    card: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isShown: PropTypes.bool.isRequired,
        isFinite: PropTypes.bool.isRequired,
    }),

    cardClick: PropTypes.func.isRequired,

}