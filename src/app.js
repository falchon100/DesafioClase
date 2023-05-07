import express from 'express'
import ProductManager from './ProductManager.js';
const app = express()
const port = 8080;
app.use(express.urlencoded({extended:true}));



app.listen(port,()=>console.log('creando servidor'))

app.get('/products',async(req,res)=>{
let limit = req.query.limit;
let productos = await leerProductos;
limit?res.send(productos.slice(0,limit)):res.send(await leerProductos)
})

app.get('/products/:id',async(req,res)=>{
let productos= await leerProductos;
res.send(productos.filter(prod=>prod.id==req.params.id))

})

let producto= new ProductManager()

const leerProductos= producto.readProducts()