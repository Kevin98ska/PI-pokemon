import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Link to={`/detail/${props.id}`}>
          <img className={style.image} src={props.image} alt={props.name} />
        </Link>
      </div>
      <div className={style.name}>{props.name}</div>
      <div className={style.types}>{props.types}</div>
    </div>
  );
}

export default Card;