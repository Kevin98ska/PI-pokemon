import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterName, filterPokemons, orderPokemons } from "../../redux/actions";
import styles from "./Filters.module.css";

const Filters = () => {
  
  const dispatch = useDispatch();
  const typesPokemons = useSelector((state) => state.typesPokemons);
  const [types, setTypes] = useState("");
  const [orderBy, setOrderBy] = useState(""); // Nuevo estado para controlar el orden

  useEffect(() => {
    dispatch(filterPokemons());
  }, [dispatch]);

  const handleFilter = (event) => {
    const response = event.target.value;
    setTypes(response);
    dispatch(filterName(response));
  };
 
  const handleOrder = (event) => {
    const orderValue = event.target.value;
    setOrderBy(orderValue);
    dispatch(orderPokemons(orderValue));
  };

  return (
    <div className={styles.container}>

<label className={styles.label} htmlFor="order-select">
        Ordenar por:
      </label>
      <select id="order-select" onChange={handleOrder} value={orderBy}>
        <option value="">Sin orden</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        <option value="Ataque">Ataque</option>
      </select>


      <label className={styles.label} htmlFor="filter-select">
        Filtro por Tipo:
      </label>
      <select id="filter-select" onChange={handleFilter}>
        <option value="">Todos</option>
        {typesPokemons.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;








    