class ProductManager{
    constructor(){
    this.products = [];
    }
// metodo para agregar productos y validacion si es que el codigo ya esta ingresado
    addProduct(title,description,price,thumbnail,code,stock){
        let nuevoProducto = {
            id:this.idGenerator(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
   
        if (this.products.find(ele=>ele.code==nuevoProducto.code)){
            console.log('El Codigo que desea ingresar ya ha sido ingresado');
        }else{
        this.products.push(nuevoProducto)
        }
      

    }
// Genero un id autoincrementable con el largo del producto
    idGenerator(){
        return this.products.length + 1;
    }
//Metodo para Mostrar los productos actuales
    getProduct(){
        return this.products
    }

// Busco en el array de productos si hay un producto con esa id y lo devuelvo o sino Not Found
    getProductById(id){
        let producto = this.products.find(elem=>elem.id == id)
       if (producto){
        console.log(producto);
       }else{
        console.log("not Found");
       }
    }    
}

// Inicializo una instancia Producto 
let producto= new ProductManager()

producto.addProduct("Hamburgesa","Doble",3000,"./product/hamb",230,300)
producto.addProduct("pancho","completo",2000,"./product/hotdog",20,20)
producto.addProduct("sanguche","completo",1500,"./product/sandwich",200,10)
/* producto.getProductById(1) */
console.log(producto.getProduct());