const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");

router.post("/create", categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:id", categoryController.deleteCategory);
router.put("/update/:id", categoryController.updateCategory);

module.exports = router;