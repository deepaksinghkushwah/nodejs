const User = require("../models/user");

exports.postAddUser = (req, res, next) => {
    const user =  new User(req.body.title);
    user.save();
    res.redirect("list");
}

exports.getAddUserForm =  (req, res, next) => {
    res.render("users-add",{
        title: "Add User", 
        path: '/users/add'
    });
};

exports.listUsers = (req, res, next) => {
    User.fetchAll(users => {
        res.render("users-list",{
            title: "All Users", 
            path: '/users/list', 
            users: users
        });
    });
    
}