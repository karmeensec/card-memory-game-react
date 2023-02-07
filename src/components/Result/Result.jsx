import React from 'react'
import styles from './Result.module.css';
import PropTypes from 'prop-types'

const Result = ({restartGame}) => {

  return (

    <div className={`${styles.container} `}>

        <p>You Won!</p>
        <button className={`${styles.button} `} onClick = {restartGame} >Restart Game</button>

    </div>   

  )
}

export default Result

Result.propTypes = {

  restartGame: PropTypes.func.isRequired,

}