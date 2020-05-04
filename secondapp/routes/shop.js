const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();
const adminData = require("./admin");

router.get('/users', (req, res, next) => {
    res.send("All users");
});


router.get('/', (req, res, next) => {
    res.render("shop",{title: "All Products", products: adminData.products, path: '/'});
});

module.exports = router;