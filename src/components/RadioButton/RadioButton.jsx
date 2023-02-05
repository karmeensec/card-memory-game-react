import React from 'react'
import styles from './RadioButton.module.css';
import PropTypes from 'prop-types'

const RadioButton = ({ name, selectItem, onChange }) => {

    const isChecked = name === selectItem;    // if both are equal, true - false

  return (

    <div className={`${styles.radioBox}`}>

        <input type="radio" name={name} id={name} value={name} checked={isChecked} onChange = {onChange} />
        <label htmlFor={name}> {name} </label>

    </div>

  )
}

export default RadioButton

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    selectItem: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
