const getPokemons = require("../controllers/getPokemons");

const handlerGetPokemons = async (req, res) => {
  try {
    const pokemons = await getPokemons();
   
    if (pokemons && pokemons.length > 0) {
      return res.status(200).json(pokemons);
    } else {
      return res.status(404).json({ message: "No se encontraron pokemones" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = handlerGetPokemons;
