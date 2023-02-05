import React from 'react'
import styles from './RadioButton.module.css';

const RadioButton = ({ name, category }) => {

    const isChecked = name === category;    // if both are equal, true - false

  return (

    <div className={`${styles.radioBox}`}>

        <input type="radio" name={name} id={name} value={name} checked={isChecked} />
        <label htmlFor={name}> {name} </label>

    </div>

  )
}

export default RadioButton