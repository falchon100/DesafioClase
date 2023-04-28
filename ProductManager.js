const fs = require("fs")


class ProductManager{
    constructor(){
    this.products = [];
    this.path="Documents/Backend/51400/PrimerDesafio";
    }
// metodo para agregar productos y validacion si es que el codigo ya esta ingresado
    addProduct(title,description,price,thumbnail,code,stock){
  // fs.promises.writeFile 
        if (!title||!description||!price||!thumbnail||!code||!stock){
        console.log('\n No se pudo agregar el producto. Debera completar todos los campos');
        }
        else{
            let nuevoProducto = {
                id:this.idGenerator(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            if (this.products.find(ele=>ele.code==code)){
                console.log(`\n No se pudo agrega el producto,ya que el codigo "${code}" ya ha sido ingresado`);
            }else{
            this.products.push(nuevoProducto)
            }
        }
    }


// Genero un id autoincrementable con el largo del producto
    idGenerator(){
        return this.products.length + 1;
    }
//Metodo para Mostrar los productos actuales
    getProduct(){
        //fs.promises.readFile
        console.log("\n ---------------Lista De Productos-----------------")
        return this.products
    }

// Busco en el array de productos si hay un producto con esa id y lo devuelvo o sino Not Found
    getProductById(id){
        let producto = this.products.find(elem=>elem.id == id)
       if (producto){
        console.log("\n --------------El producto encontrado es :------------");
        console.log(producto);
       }else{
        console.log("not Found");
       }
    }  
    
    
    updateProduct(){

    }

    deleteProduct(e){
     this.products.forEach((elemento,index)=>{
        if(elemento.code==e){
            this.products.splice(index,1)
            console.log(`se elimino "${e}" de la lista`);
        }
     })
    }
}

// Se crea la instancia ProductManager
let producto= new ProductManager()

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(producto.getProduct())
producto.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
console.log(producto.getProduct());
producto.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
producto.getProductById(1)
producto.getProductById(3)
console.log(producto.getProduct());
/* producto.deleteProduct("abc123")
console.log(producto.getProduct()); */
producto.deleteProduct("abc1df23")
console.log(producto.getProduct())