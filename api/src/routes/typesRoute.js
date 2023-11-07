const {Router} = require ("express");
const typesRouter = Router();
const handlerGetTypes = require ("../handlers/handlerGetTypes");

typesRouter.get ("/", handlerGetTypes);

module.exports = typesRouter;