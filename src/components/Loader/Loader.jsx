import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import styles from './Loader.module.css';

const Loader = () => {
    
  return (

    <div className={`${styles.loader}`} > <PacmanLoader /> </div>

  )
}

export default Loader