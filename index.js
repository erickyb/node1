const express = require('express');
const routerApi= require('./routers/productos.router')
const app = express();
const {longError,errorHandler}=require('./middlewares/error.handler')
const port = 3000;

app.use(express.json());
routerApi(app);
app.use(longError);
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.send('primer servicio')
});

 app.listen(port,()=>{
    console.log('¡vamos que si puedes! repitelo ' + port);
 })
 