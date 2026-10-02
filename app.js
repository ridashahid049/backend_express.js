import express from "express"

import pool from "./db.js";
const app = express();

app.use(express.json());

const products = [];

app.get("/products", (req, res) => {
    res.json(products);
});
app.get("/",(req , res)=>{
    res.json("Hello Server is running on port 5000")
})

app.get("/contact",(req , res)=>{
    res.json("Hello contact page")
})

app.get("/about",(req , res)=>{
    res.json("Hello about page")
})

app.post("/products", (req, res) => {

    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(product);

    res.json(product);
});

app.put("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find((product) => product.id === id);

    if (!product) {
    return res.status(404).json("Product not found");
}

products.splice(productIndex, 1);

res.json("Product deleted successfully");

product.name = req.body.name;
product.price = req.body.price;

res.json(product);

});

app.delete("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
        return res.status(404).json("Product not found");
    }

    products.splice(productIndex, 1);

    res.json("Product deleted successfully");
});

pool.query("SELECT NOW()", (error , result) => {
    if(error){
        console.log("Database Failed", error);
    }
     else {
        console.log("Database is Connected", result.rows);
    }
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
