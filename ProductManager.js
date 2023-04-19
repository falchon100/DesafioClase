class ProductManager{
    constructor(){
    this.products = [];
    }

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
       
        if (this.products.includes(nuevoProducto.code)){
            console.log("el producto ya existe");
        }else{

            this.products.push(nuevoProducto)
        }
     


    }

    idGenerator(){
        return this.products.length + 1;
    }

    getProduct(){
        return this.products
    }


    getProductById(id){
        let producto = this.products.find(elem=>elem.id == id)
       if (producto){
        console.log(producto);
       }else{
        console.log("not Found");
       }
    }    
}


let producto= new ProductManager()

producto.addProduct("Hamburgesa","Doble",3000,"./product/hamb",230,300)
producto.addProduct("pancho","completo",2000,"./product/hotdog",200,20)
producto.addProduct("sanguche","completo",1500,"./product/sandwich",200,10)
/* producto.getProductById(1) */
console.log(producto.getProduct());