import React from 'react';
import SearchBar from '../Nav/searchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = ({ handleChange, handleSubmit }) => {
  return (
    <nav className={style.nav}>
      <Link to="/home">
        <button className={style.button}>Home</button>
      </Link>

      <Link to="/form">
        <button className={style.button}>Form</button>
      </Link>

      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    </nav>
  );
};

export default Nav;
