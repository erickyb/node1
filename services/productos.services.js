class productoService{
constructor(){
    this.productos=[];
    this.generate();
}

generateNewCodProd(productos){
    const ids = this.productos.map(producto => Number(producto.id));
    const newid = Math.max(...ids)+1;
    return newid.toString();
}


generate(){


    this.productos=[
        {id:'1', nombre:"prd1",price:100},
        {id:'2', nombre:"prd2",price:200},
        {id:'3', nombre:"prd3",price:300}
    ]
}
    async create(data){
        const Newproducto={
            id:this.generate.NewCodProd(this.productos),
            ...data
        }
        this.productos.push(Newproducto);
        return Newproducto
    }
    async find(){
        return this.productos
        //return new Promise((resolve, reject)=>{
      //      setTimeout(()=>{
      //          resolve(this.productos);
       //     },5000);
//
       // });
    }
    async findOne(id){
        return this.productos.find(items=>items => items.id === id);
    }
    async update(id,change){
        const index = this.productos.findIndex(items => items.id === id);
        if(index === -1){throw new error ("Producto inexistente");}
        const productos = this.productos[index];
        this.productos[index]={
            ...productos,
            ...change
        }
        return true;
    }
    async delete(id){
        const index = this.productos.findIndex(item => item.id === id);
        if(index === -1){ 
            throw new Error("producto inexistente");
        }
        this.productos.splice(index,1);
            return {id};
        }
}
module.exports = productoService;