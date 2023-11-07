import React from 'react';
import Button from "../../components/startButton/startButton";
import {useNavigate} from 'react-router-dom';
import styles from "../landing/landing.module.css"; 
import landingImage from "../landing/pokeball.jpg";

function Landing() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/home');
  };

  return (
    <div className={styles['landing-container']}>
    <img src={landingImage} alt="Fondo de Landing" className={styles['landing-image']} />
    <div className={styles['overlay-content']}>
      <h1 className={styles['landing-text']}>Encuentra información de cualquier pokemon</h1>
      <Button text="Ingresar" onClick={handleNavigateToHome} />
    </div>
  </div>
  
  );
}

export default Landing;