const axios = require('axios');
const { Types } = require("../src/db");

const typesData = async () => {
  try {
    // Consulta tipos de pokemon desde la BD
    const types = await Types.findAll();
    return types;
  } catch (error) {
    throw new Error('Error al obtener los tipos de la base de datos.');
  }
};

const saveTypesToDatabase = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type/');
    const types = response.data.results.map((type) => type.name);

    // Guardar tipos en la BD
    await Types.bulkCreate(types.map((name) => ({ name })));
    return types;
  } catch (error) {
    throw new Error('Error al obtener o guardar los tipos desde la API.');
  }
};

module.exports = { typesData, saveTypesToDatabase };
