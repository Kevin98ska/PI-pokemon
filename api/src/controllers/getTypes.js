const { typesData, saveTypesToDatabase } = require("../typesData"); 

async function getTypes() {
  const types = await typesData(); // Obtiene los types de la API

    // Si la base de datos está vacia los guarda
    if (types.length === 0) {
      types = await saveTypesToDatabase();
    }
    return types
  };

module.exports = getTypes;
