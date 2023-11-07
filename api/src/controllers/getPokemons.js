const axios = require("axios");

async function getPokemons(limit) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit=60}`);
  const pokemons = response.data.results;

  const pokemonDetails = await Promise.all(
    pokemons.map(async (pokemon) => {
      const pokemonResponse = await axios.get(pokemon.url);

      // Obtén los tipos del Pokémon
      const types = pokemonResponse.data.types.map((type) => type.type.name);

      const formattedData = {
        id: pokemonResponse.data.id,
        name: pokemonResponse.data.name,
        image: pokemonResponse.data.sprites.front_default,
        hp: pokemonResponse.data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        attack: pokemonResponse.data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        defense: pokemonResponse.data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        speed: pokemonResponse.data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
        height: pokemonResponse.data.height,
        weight: pokemonResponse.data.weight,
        types: types,
      };
      return formattedData;
    })
  );

  return pokemonDetails;
}

module.exports = getPokemons;

