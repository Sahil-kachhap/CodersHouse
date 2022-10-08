import React from 'react'
import styles from './Button.module.css'

const Button = ({children}) => {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    <img className={styles.arrow} src='/images/arrow-forward.png' alt='arrow'/>
  </button>
  )
}

export default Button