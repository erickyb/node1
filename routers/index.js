const express = require('express');
const productsRouter = require('./productos.router');

function routerApi(app) {
   const router = express.Router();
   app.use('/api/v1',router);
 router.use('/tareas', productsRouter);
}
module.exports = routerApi;
