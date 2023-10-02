const express = require('express');
const routerApi = require('./routers/index');
const cors = require('cors')
const path = require('path')
const app = express();
const port = 3000;


//const {logError,errorHandler,boomErrorHandler} = require('./middlewares/error.handler') 
//const routerApi= require('./routers/productos.router')

//app.use(express.json());

const whitelist = ['http://localhost:3000','http://myapp.com'];
const options = {
  origin: (origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true);
    }else{
      callback(new Error('acceso no permitido'));
    }
  }
}



//app.use(cors(options));

app.use(routerApi)

// app.use(logError);
// app.use(errorHandler);
// app.use(boomErrorHandler);


app.get('/',(req,res)=>{
  res.send('primer servicio')
});



app.listen(port,()=>{
  console.log('¡vamos que si puedes! repitelo ' + port+' veces');
});

