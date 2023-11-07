const { Router } = require('express');
const pokemonsRouter = require ("./pokemonsRoute");
const typesRouter = require ("./typesRoute");

const router = Router();

router.use("/pokemons", pokemonsRouter);
router.use ("/types", typesRouter);

module.exports = router;
