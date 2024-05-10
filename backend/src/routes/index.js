const { Router } = require("express");

const expenditureRoutes = require("./expenditure.routes");

const routes = Router();

routes.use('/expenditure', expenditureRoutes);

module.exports = routes;