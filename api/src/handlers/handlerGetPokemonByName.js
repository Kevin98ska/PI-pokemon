const getPokemonByName = require ("../controllers/getPokemonByName");

const handlerGetPokemonByName = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      return res.status(400).json({ error: "El parámetro 'name' es requerido" });
    } 
    const pokemons = await getPokemonByName(name);

    if (!pokemons || pokemons.length === 0) {
      return res.status(404).json({ message: "No se encontraron Pokemones con ese nombre" });
    }
    res.status(200).json(pokemons);

  } catch (error) {
    console.error('Error al manejar la solicitud de busqueda del Pokemon:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
 module.exports = handlerGetPokemonByName;