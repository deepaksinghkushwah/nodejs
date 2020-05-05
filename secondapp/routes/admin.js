const express = require("express");
const path = require("path");
const productsController = require("../controllers/products");

const router = express.Router();
const rootDir = require("../utils/path");


// POST /admin/add-product
router.post('/add-product', productsController.postAddProduct);

// GET /admin/add-product
router.get('/add-product', productsController.getAddProduct);

module.exports = {
    routes: router,
    products: productsController.products
}