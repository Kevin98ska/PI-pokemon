const getPokemonById = require("../controllers/getPokemonById");

const handlerGetPokemonById = async (req, res) => {
  try {
    const byId = await getPokemonById(req); // Pasa req como argumento
    res.status(200).json(byId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handlerGetPokemonById;
