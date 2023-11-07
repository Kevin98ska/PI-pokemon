const postPokemons = require("../controllers/postPokemons");

const handlerPostPokemon = async (req, res) => {
  try {
    const  { name, image, hp, attack, defense, speed, height, weight, types} = req.body;
    const pokemon = await  postPokemons(name, image, hp, attack, defense, speed, height, weight, types);
    console.log(pokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerPostPokemon;
