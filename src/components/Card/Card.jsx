import React from 'react'
import Photo from '../Photo/Photo';
import styles from './Card.module.css';

const Card = ({ card, cardClick }) => {

    const onClick = function() {
        cardClick(card.uniqueId);
    }

  return (

    <div className={`${styles.container}`} onClick = {onClick}>

        <div className={`${styles.card} ${card.isShown ? styles.flipped : ''} `}>

            <div className={`${styles.front}`}></div>
            <div className={`${styles.back}`}>
                <Photo url={card.url} />
            </div>

        </div>

    </div>

  )
}

export default Card