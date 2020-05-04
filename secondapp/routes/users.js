const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

const users = [];

// process form
router.post('/add', (req, res, next) => {
    users.push(req.body.title);
    res.redirect("list");
});

// render form
router.get('/add', (req, res, next) => {
    res.render("users-add",{title: "Add User", path: '/users/add'});
});

// list all users
router.get('/list', (req, res, next) => {
    res.render("users-list",{title: "All Users", path: '/users/list', users: users});
});

module.exports = { 
    routes: router,
    users: users
}