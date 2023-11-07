import React from 'react';
import styles from "../startButton/startButton.module.css" 

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.startButton} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
