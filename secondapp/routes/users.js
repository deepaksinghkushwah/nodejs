const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");



// process form
router.post('/add', userController.postAddUser);

// render form
router.get('/add',userController.getAddUserForm);

// list all users
router.get('/list', userController.listUsers);

module.exports = { 
    routes: router,    
}