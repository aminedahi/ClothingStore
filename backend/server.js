import express from "express";
import data from "./Data.js";
const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});
const port = process.env.PORT || 5000

app.listen(port, () => { console.log("Server started at http://localhost:5000") }); 
