let products = [
    {id : 1 , name : "Laptop",price : 500000},
    {id : 2,name : "Mobile",price : 25000}
]

const getAllProducts  = (req,res) =>{
    res.json(products) ;
} ;

// GET single product by id
const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
};

//  POST create product
const createProduct = (req, res) => {
    const { name, price } = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};

//  PUT update product
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const { name, price } = req.body;

    product.name = name || product.name;
    product.price = price || product.price;

    res.json(product);
};

//  DELETE product
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);

    res.json({ message: "Product deleted successfully" });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};