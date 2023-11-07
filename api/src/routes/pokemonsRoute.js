const {Router} = require ("express");
const pokemonsRouter = Router();
//handlers...
const handlerGetPokemons = require ("../handlers/handlerGetPokemons");
const handlerGetPokemonById= require ("../handlers/handlerGetPokemonById");
const handlerGetPokemonByName = require ("../handlers/handlerGetPokemonByName");
const handlerPostPokemon = require ("../handlers/handlerPostPokemons");

pokemonsRouter.get("/", handlerGetPokemons);
pokemonsRouter.get ("/search", handlerGetPokemonByName);
pokemonsRouter.get("/:idPokemon", handlerGetPokemonById);
pokemonsRouter.post("/", handlerPostPokemon);

module.exports = pokemonsRouter;
