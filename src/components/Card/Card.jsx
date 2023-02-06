import React from 'react'
import Photo from '../Photo/Photo';
import styles from './Card.module.css';

const Card = ({ card }) => {

  return (

    <div className={`${styles.container}`}>

        <div className={`${styles.card}`}>
            <div className={`${styles.front}`}></div>
            <div className={`${styles.back}`}>
                <Photo url={card.url} />
            </div>
        </div>

    </div>

  )
}

export default Card