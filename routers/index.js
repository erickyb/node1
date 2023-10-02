 const express = require('express')
 const router = express.Router()

  router.get('/contacto', (req, res) => {
  res.send('<h1>Contacto</h1>');
});

  router.get('/api/v1',(req,res) => {
    res.send('<h1>api</h1>');
   });
 
  router.use('/tareas',(req,res) => {
  res.send('<h1>tarea</h1>');
 })
module.exports = router
