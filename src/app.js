import express from 'express'
import ProductManager from './ProductManager.js';
const app = express()
const port = 8080;
app.use(express.urlencoded({extended:true}));



app.listen(port,()=>console.log('creando servidor'))

app.get('/products',async(req,res)=>{
let limit = req.query.limit;
let productos = await producto.readProducts();
limit?res.send(productos.slice(0,limit)):res.send(productos)
})

app.get('/products/:id',async(req,res)=>{
  let productoId= await producto.getProductById(req.params.id)
  productoId?res.send(productoId):res.send('no se encontro el producto')
/* let productos= await producto.readProducts();
productos.find(prod=>prod.id==req.params.id)?res.send(productos.filter(prod=>prod.id==req.params.id)):res.send('no se encontro el producto') */
})

let producto= new ProductManager()
