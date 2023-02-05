import React from 'react'
import styles from './RadioButton.module.css';

const RadioButton = ({ name }) => {

  return (

    <div className={`${styles.radioBox}`}>

        <input type="radio" name={name} id={name} value={name} />
        <label htmlFor={name}> {name} </label>

    </div>

  )
}

export default RadioButton