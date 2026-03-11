const express = require("express");
const router = express.Router();

const {
  getAllproduct,
  getProductbyId,
  createProduct,
  addProduct,
  updateByid
} = require("../controller/ProductController.js");

router.get("/products", getAllproduct);

router.post("/products/create", createProduct);


router.get("/products/:id", getProductbyId);


router.post("/products/addpro", addProduct);


router.put("/products/update/:id", updateByid);

module.exports = router;