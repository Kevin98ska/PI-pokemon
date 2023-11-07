const { Pokemons, Types } = require('../db');
const uuid = require('uuid');


const postPokemons = async ( name, image, hp, attack, defense, speed, height, weight, types) => {

    // Crea el Pokemon en la bdd
    const newPokemonId = uuid.v4(); 
    const newPokemon = await Pokemons.create({
      id:newPokemonId,
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    types.map (async (name)=> {
    const pokemonTypes = await Types.findAll({
      where: { name: name }, 
    });
 
    // Asociar los tipos al nuevo Pokémon
    await newPokemon.addTypes(pokemonTypes);
 })
    return newPokemon

};

module.exports = postPokemons;

