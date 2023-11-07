const axios = require ("axios");
const { conn, Types} = require('../src/db');

// Types => Consume API externa
const fetchPokemonTypes = async () => {

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type/');
    const types = response.data.results.map((type) => type.name);
    return types;

  } catch (error) {
    console.error('Error al obtener tipos de Pokémon:', error.message);
    return [];
  }};

// Envia la data obtenida a la BD
const sendData = async () => {
  try {
    const types = await fetchPokemonTypes(); // Obtiene los tipos de la API

    // Filtra tipos de Pokemon con nombre válido
    const validTypes = types.filter(typeName => typeName);
    await conn.sync({ force: true }); // Sincroniza la bdd

    // Inserta en la tabla Types
    await Types.bulkCreate(validTypes.map(typeName => ({ name: typeName })));
    console.log("Datos de tipos de Pokémon enviados a la BDD correctamente.");
    
  } catch (error) {
    console.error("Error al enviar datos a la BDD:", error.message);
  }};

module.exports = { sendData };
