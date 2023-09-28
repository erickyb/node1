const productsRouter = require('./productos.router');
const productoService = require('../services/productos.services');
const service = new productoService();
const express = require('express');
const router = express.Router();


function routerApi(app){
    app.use('/products',productsRouter);


router.get('/',(req,res)=>{
    const products=[{},{}];
    const {size}=req.query;
    res.json(products);
});
router.get('/',(req,res)=>{
    const product=service.find();
    res.json(product);
})

router.get('/:id',(req,res)=>{
    const{id}=req.params;
    res.json({id,name:'product 2 ', price:2000});
});

router.get('/:id',async (req,res)=>{
    const{id}=res.params;
    const producto = await service.findOne(id);
    res.json(producto);
});


}
module.exports= routerApi;