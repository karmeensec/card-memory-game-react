import React from 'react'
import styles from './Result.module.css';

const Result = () => {

  return (

    <div className={`${styles.container} `}>

        <p>You Won!</p>
        <button className={`${styles.button} `}>Restart Game</button>

    </div>   

  )
}

export default Result