import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import styles from "../detail/detail.module.css";

export default function Detail() {
    const {id} = useParams(); 
    const [pokemons, setPokemons] = useState(null);
  
    useEffect(() => {
      axios(`http://localhost:3001/pokemons/${id}`)
        .then(({ data }) => {
          if (data) {
            setPokemons(data);
          } else {
            window.alert('No hay pokemons con ese ID');
          }
        })
        .catch((error) => {
          console.error(error);
        });
        return () =>{
            setPokemons({})
        }
    }, [id]);

      if (!pokemons) {
        return <div>No se encontraron pokemones con ese ID</div>;
      }
      const {
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types
      } = pokemons;

      return (
   
        <div className={styles.container}>
    
        <span className={styles.name}>{name}</span> {/* Agrega una clase específica para el nombre */}
        <div className={styles.properties}>Vida : {hp}</div>
        <div className={styles.properties}>Ataque : {attack}</div>
        <div className={styles.properties}>Defensa : {defense}</div>
        <div className={styles.properties}>Velocidad : {speed}</div>
        <div className={styles.properties}>Altura : {height}</div>
        <div className={styles.properties}>Peso : {weight}</div>
        <div className={styles.properties}>Tipo : {types}</div>
        <img className={styles.image} src={image} alt={name} />
        
        </div>
      );
    }