const Products = require("../model/ProductModel");

const getAllproduct = async (req, res) => {
  try {
    const products = await Products.find();
    res.json({
      succuses:true,
      data:products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

const getProductbyId = async (req, res) => {
  const findproduct = await Products.findById(req.params.id);
  if (findproduct) {
    res.status(201).json({
      message: "Find Product",
      data: findproduct,
    });
 } else {
    res.json({message: "Product Not Found"})
  }
};

const addProduct = async (req,res) =>{
  const Product = await Products.create(req.body)
  res.status(202).json({
    message:"Product added",
    data:Product
  })
}

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    const newProduct = await Products.create({
      name,
      price,
      description,
      category,
    });

    res.status(201).json({
      message: "Product Created Successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};

const DeleteByid = async(req,res) => {
  const deletedProduct = await Products.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: "Product deleted successfully",
    data: deletedProduct,
  });
}

const updateByid = async(req,res) =>{
  try {
    const update = await Products.findByIdAndUpdate(req.params.id,req.body)
    res.json({
      message:"Data updated Succussfully",
      data:update
    })    
  } catch (error) {
    res.json({
      message:error
    })
  }
}





module.exports = { getAllproduct,getProductbyId,addProduct,createProduct,updateByid }
