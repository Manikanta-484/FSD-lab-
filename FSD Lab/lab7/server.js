const express = require('express');
const app = express();
const port = 3012;

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});


let products =[
    {id:1,name:"laptop",price:1000},
    {id:2,name:"phone",price:500}
];


app.get("/",(req,res)=>{
    res.send("hello world!!");
});

app.get('/products',(req,res)=>{
    res.json(products);
});

app.post('/products',(req,res)=>{
    const newProduct  = req.body;

    products.push(newProduct);
    res.status(200).json(newProduct);
});

app.get('/products/:id',(req,res)=>{
    const product = products.find(p=> p.id === parseInt(req.params.id));
    if(!product){
       return res.status(400).json({error:"Product not found!!"});
    }
    res.json(product);
});


app.put("/products/:id",(req,res)=>{
    const product = products.find(p=>p.id === parseInt(req.params.id));
    if(!product) return res.status(400).json({error:"product not found!!"});

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.json(product);
});

app.delete("/products/:id",(req,res)=>{
    const productIndex = products.findIndex(p=>p.id === parseInt(req.params.id));
    if(productIndex === -1) return res.status(400).json({error:"product not found!!"});

    const deletedProduct  = products.splice(productIndex,1);
    res.json(deletedProduct[0]);
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})



