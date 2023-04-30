const fs = require("fs")


class ProductManager{
    constructor(){
    this.products = [];
    this.path="./DesafioClase2.txt";
    this.idNumber=[];
    }

async readProducts (){
    let producto= await fs.promises.readFile(this.path,"utf-8")
    return JSON.parse(producto)
}


// metodo para agregar productos y validacion si es que el codigo ya esta ingresado
    async addProduct(title,description,price,thumbnail,code,stock){
        if (!title||!description||!price||!thumbnail||!code||!stock){
        console.log('\n No se pudo agregar el producto. Debera completar todos los campos')}
        else{
            let nuevoProducto = {
                id:await this.idGenerator(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.idNumber.push(nuevoProducto)
            let producto= await this.readProducts()
            if (producto.length==0){
                this.products.push(nuevoProducto)
                await fs.promises.writeFile(this.path,JSON.stringify(this.products))
            }else{
                if (producto.find(ele=>ele.code==code)){
                console.log(`\n No se pudo agrega el producto,ya que el codigo "${code}" ya ha sido ingresado`)}
                else{
                    producto.push(nuevoProducto)
                    await fs.promises.writeFile(this.path,JSON.stringify(producto))
                }
            }
        }
    }

    

// Genero un id autoincrementable con el largo del producto
   async idGenerator(){
    let producto= await this.readProducts()  
    let idNumber = this.idNumber
    let resultado = producto.length+ idNumber.length+1;
    return resultado;
    }

//Metodo para Mostrar los productos actuales
   async getProduct(){
    let producto = await this.readProducts()
    return console.log(producto);
    }

// Busco en el array de productos si hay un producto con esa id y lo devuelvo o sino Not Found
  async  getProductById(id){
    let producto2= await fs.promises.readFile(this.path,"utf-8")
    let productoEncontrado = JSON.parse(producto2)
        let producto = productoEncontrado.find(elem=>elem.id == id)
       if (producto){
        console.log("\n --------------El producto encontrado es :------------");
        console.log(producto);
       }else{
        console.log("not Found");
       }
    }  

//desestructuro los valores del producto enviado en parametros  y elimino a ese producto
  async  updateProduct({id,...producto}){
//uso ese id para borrar el producto
    await this.deleteProduct(id);
// usamos readProducts para leer los productos que quedaron
    let productOld= await this.readProducts()
// genero un nuevo array que tendra los productos restantes (...productOLd)
    let productsModif= [{
    id,...producto},...productOld]
    await fs.promises.writeFile(this.path,JSON.stringify(productsModif))
    }

   async deleteProduct(id){
    //Leo el archivo y el objeto lo guardo en productoEncontrado
    let producto2= await fs.promises.readFile(this.path,"utf-8")
    let productoEncontrado = JSON.parse(producto2)
    //recorro el array de productos y si encuentro uno con el mismo id , lo borro y muestro el indice que borre
    productoEncontrado.forEach((elemento,index)=>{
        if(elemento.id==id){
            productoEncontrado.splice(index,1)
            console.log(`se elimino "${id}" de la lista`);
        }
     })
     //Envio el array de productos actualizados al archivo
   await fs.promises.writeFile(this.path,JSON.stringify(productoEncontrado))
    }
}

// Se crea la instancia ProductManager
let producto= new ProductManager()

/*  producto.addProduct('uno',"uno",1,"uno","uno",1);
producto.addProduct('dos',"dos",2,"dos","dos",2);
producto.addProduct('tres',"tres",3,"tres","tres",3);
 */

/* producto.updateProduct({
    id: 3,
    title: 'tres',
    description: 'tres',
    price: 3,
    thumbnail: 'tres',
    code: 'tres',
    stock: 3
  })  */

/* producto.getProduct() */