const axios = require('axios');
const { Pokemons, Types } = require("../db");

async function getPokemonById (req, res) {
  const { idPokemon } = req.params;

    // Busca en la bdd datos del Pokemon
    const pokemonFromDB = await Pokemons.findOne({
      where: { id: idPokemon }});

    if (pokemonFromDB) {
      // Busca en la bdd datos de Types (segunda consulta)
      const typesFromDB = await Types.findAll({
        where: { id: idPokemon }});

      // Formatea datos del Pokemon y une ambas consultas
      const formattedPokemon = {
        id: pokemonFromDB.id,
        name: pokemonFromDB.name,
        image: pokemonFromDB.image,
        hp: pokemonFromDB.hp,
        attack: pokemonFromDB.attack,
        defense: pokemonFromDB.defense,
        speed: pokemonFromDB.speed,
        height: pokemonFromDB.height,
        weight: pokemonFromDB.weight,
        types: typesFromDB.map(type => type.name),
      };
      return formattedPokemon;
      
    } else {
      // Si no se encontró en la bdd, obtiene los datos de la API externa
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
      const pokemonData = response.data;
      const types = pokemonData.types.map((type) => type.type.name);

      // Formatea datos del Pokemon
      const formattedPokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        hp: pokemonData.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        attack: pokemonData.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        defense: pokemonData.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        speed: pokemonData.stats.find((stat) => stat.stat.name === 'speed').base_stat,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: types,
      };
      return formattedPokemon;
}};

module.exports = getPokemonById;

