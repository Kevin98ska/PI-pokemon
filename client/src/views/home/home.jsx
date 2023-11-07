import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cards from '../../components/Cards/Cards';
import styles from './home.module.css';
import { paginate, calculateTotalPages } from "../../components/Pagination/Pagination";
import { getPokemons} from "../../redux/actions";
import Filters from "../../components/Filters/Filters";


const Home = () => {
  // Cuando se monta, que haga el dispatch
  // useEffect()    -  useDispatch()

const dispatch = useDispatch();
const pokemons = useSelector((state) => state.pokemons); // Obtener los pokemones del estado

  useEffect(()=> {
    dispatch(getPokemons());
  },[dispatch])


const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 12;
const totalPages = calculateTotalPages(pokemons, itemsPerPage);
const pokemonsToDisplay = paginate(pokemons, currentPage, itemsPerPage);
  
const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }};

const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }};

return (
    <div className={`home-page ${styles['home-background']} home-container`} styles={{ padding: '25px' }}>

     {<Filters/>}
      
      <Cards pokemonsToDisplay={pokemonsToDisplay} />

      <div className={styles.paginationContainer}>

        <button 
        className={styles.button} 
        onClick={goToPreviousPage} 
        disabled={currentPage === 1}>
        Anterior
        </button>

        <button 
        className={styles.button} 
        onClick={goToNextPage} 
        disabled={currentPage === totalPages}>
        Siguiente
        </button>

      </div>
    </div>
  );
};


export default Home;
