import React from 'react'
import styles from './Settings.module.css';
import {CATEGORIES} from './../../../constants.js';
import RadioButton from '../RadioButton';


const Settings = () => {

  return (

    <div className={`${styles.settings} glassmorphism`} >

        <h2>Settings</h2>
        <h4>Categories: </h4>

        <div className={`${styles.setting}`}>

            {CATEGORIES.map( item => {
                return <RadioButton key={item} name={item} />
            } )}

        </div>

    </div>

  )
}

export default Settings