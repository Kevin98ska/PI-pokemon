import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const FILTER_NAME = "FILTER_NAME";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";


export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
        'http://localhost:3001/pokemons'
        );
          const pokemons = apiData.data;
    dispatch ({ 
        type: GET_POKEMONS, 
        payload: pokemons}) 
    };
};


export const filterPokemons = () => {
  return async function (dispatch) {
       const apiData = await axios.get(
       'http://localhost:3001/types'
       );
       const types = apiData.data;
   
    dispatch({
      type: FILTER_POKEMONS,
      payload: types,
    });
  };
};

export const getByName = (name) => {
  return async function (dispatch) {
       const apiData = await axios.get(
       `http://localhost:3001/pokemons/search?name=${name}`
       );
       const pokemon = apiData.data;
   
    dispatch({
      type: GET_BY_NAME,
      payload: pokemon,
    });
  };
};


export const filterName = (name) => {
return {
  type: FILTER_NAME,
  payload: name
};
};

export const orderPokemons = (orden) => {
  return {
    type: ORDER_POKEMONS,
    payload: orden,
  };
};
