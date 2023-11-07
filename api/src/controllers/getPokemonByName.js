const { Pokemons } = require('../db');
const axios = require("axios");
const { Sequelize } = require('sequelize');
const { Op } = Sequelize;

async function getPokemonByName (name) {

    // Busca en la bdd
    const dbPokemon = await Pokemons.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        }}
    });

    if (dbPokemon) {
      return dbPokemon
    };

    // Realiza una solicitud a la API solo si no se encuentra en la base de datos
    const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const apiPokemon = apiResponse.data;
    const types = apiPokemon.types.map((type) => type.type.name);

    // Formatea datos del Pokemon
    const formattedPokemon = {
      id: apiPokemon.id,
      name: apiPokemon.name,
      image: apiPokemon.sprites.front_default,
      hp: apiPokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat,
      attack: apiPokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat,
      defense: apiPokemon.stats.find((stat) => stat.stat.name === 'defense').base_stat,
      speed:apiPokemon.stats.find((stat) => stat.stat.name === 'speed').base_stat,
      height: apiPokemon.height,
      weight: apiPokemon.weight,
      types: types,
    };

    return formattedPokemon; 
};

module.exports = getPokemonByName;

