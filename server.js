const express = require("express") ;
const app = express() ;
const port = 5000 ;

app.use(express.json()) ;

// Import routes
const productRoutes = require("./src/routes/product.routes");

// Use routes
app.use("/api", productRoutes);

app.listen(port , () =>{
    console.log(`Server running on port ${port}`) ;
})