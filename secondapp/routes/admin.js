const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

const products = [];
// POST /admin/add-product
router.post('/add-product', (req, res, next) => {
    products.push(req.body.title);
    res.redirect("/");
});

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.render("add-product",{title: "Add Product", path: '/admin/add-product'});
});

module.exports = {
    routes: router,
    products: products
}