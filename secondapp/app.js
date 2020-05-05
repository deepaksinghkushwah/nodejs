const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controllers/error");


const express = require("express");
const app = express();
app.set("view engine","ejs");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use("/users",userRoutes.routes);

app.use(errorController.get404Page);

const server = http.createServer(app);
server.listen(3000);